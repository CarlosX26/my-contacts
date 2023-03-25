import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api/api"

interface IContactContextProviderProps {
  children: React.ReactNode
}

interface IContactContext {
  contacts: IContact[] | undefined
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

  return (
    <contactContext.Provider value={{ contacts }}>
      {children}
    </contactContext.Provider>
  )
}

const useContactContext = (): IContactContext => useContext(contactContext)

export { ContactContextProvider, useContactContext }
