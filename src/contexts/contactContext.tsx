import { createContext, useContext, useEffect, useState } from "react"
import { INewContact } from "../components/ModalNewContact"
import api from "../services/api/api"

interface IContactContextProviderProps {
  children: React.ReactNode
}

interface IContactContext {
  contacts: IContact[] | undefined
  newContact(newContact: INewContact): void
}

interface IContact {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
}

const contactContext = createContext({} as IContactContext)

const ContactContextProvider = ({ children }: IContactContextProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>()

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

  const newContact = async (newContact: INewContact): Promise<void> => {
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

  const updateContact = async () => {}

  const deleteContact = async () => {}

  const filterContact = () => {}

  return (
    <contactContext.Provider value={{ contacts, newContact }}>
      {children}
    </contactContext.Provider>
  )
}

const useContactContext = (): IContactContext => useContext(contactContext)

export { ContactContextProvider, useContactContext }
