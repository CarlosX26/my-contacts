import { FieldValues, UseFormReset } from "react-hook-form"
import {
  ILoginForm,
  IRegisterContactForm,
  IRegisterUserForm,
  IUpdateContactForm,
  IUpdateUserForm,
} from "../validations/types"

export interface IUser {
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
  id: string
}

export interface IAuthContext {
  login(loginData: ILoginForm): void
  signUp(registerData: IRegisterUserForm): void
  toggleCard(card: string): void
  logout(): void
  updateUser(
    userData: IUpdateUserForm,
    reset: UseFormReset<FieldValues>
  ): Promise<void>
  card: string
  user: IUser | undefined
}

export interface IContactContext {
  contacts: IContact[] | undefined
  newContact(
    newContact: IRegisterContactForm,
    onClose: () => void
  ): Promise<void>
  deleteContact(contactId: string): Promise<void>
  filterContact: string
  setFilterContact: React.Dispatch<React.SetStateAction<string>>
  updateContact(
    contactData: IUpdateContactForm,
    onClose: () => void
  ): Promise<void>
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

export interface IContextProviderProps {
  children: React.ReactNode
}
