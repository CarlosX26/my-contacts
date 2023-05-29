import { createContext, useContext, useEffect, useState } from "react"
import { IRegisterContactForm } from "../validations/types"
import { IUpdateContactForm } from "../validations/types"
import api from "../services/api/api"

interface IContactContextProviderProps {
  children: React.ReactNode
}

interface IContactContext {
  contacts: IContact[] | undefined
  newContact(newContact: IRegisterContactForm): Promise<void>
  deleteContact(contactId: string): Promise<void>
  filterContact: string
  setFilterContact: React.Dispatch<React.SetStateAction<string>>
  updateContact(contactData: IUpdateContactForm): Promise<void>
  contact: IContact | undefined
  setContact: React.Dispatch<React.SetStateAction<IContact | undefined>>
}

export interface IContact {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
}

const contactContext = createContext({} as IContactContext)

const ContactContextProvider = ({ children }: IContactContextProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>()
  const [contact, setContact] = useState<IContact>()
  const [filterContact, setFilterContact] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        await getContacts()
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const getContacts = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("@myContact:token")
      const { data } = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setContacts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const newContact = async (
    newContact: IRegisterContactForm
  ): Promise<void> => {
    try {
      const token = localStorage.getItem("@myContact:token")
      const { data } = await api.post("/contacts", newContact, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setContacts([...contacts!, data])
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (
    contactData: IUpdateContactForm
  ): Promise<void> => {
    try {
      const token = localStorage.getItem("@myContact:token")
      const { data } = await api.patch(
        `/contacts/${contact?.id}`,
        contactData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      setContacts(contacts?.map((e) => (e.id === data.id ? data : e)))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = async (contactId: string) => {
    try {
      const token = localStorage.getItem("@myContact:token")
      await api.delete(`/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setContacts(contacts?.filter((e) => e.id !== contactId))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <contactContext.Provider
      value={{
        contacts,
        newContact,
        deleteContact,
        filterContact,
        setFilterContact,
        updateContact,
        contact,
        setContact,
      }}
    >
      {children}
    </contactContext.Provider>
  )
}

const useContactContext = (): IContactContext => useContext(contactContext)

export { ContactContextProvider, useContactContext }
