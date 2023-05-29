import { z } from "zod"
import { LoginForm } from "./auth"
import { RegisterUserForm, UpdateUserForm } from "./user"
import { RegisterContactForm, UpdateContactForm } from "./contact"

type ILoginForm = z.infer<typeof LoginForm>

type IRegisterUserForm = z.infer<typeof RegisterUserForm>

type IUpdateUserForm = z.infer<typeof UpdateUserForm>

type IRegisterContactForm = z.infer<typeof RegisterContactForm>

type IUpdateContactForm = z.infer<typeof UpdateContactForm>

export type {
  ILoginForm,
  IRegisterUserForm,
  IUpdateUserForm,
  IRegisterContactForm,
  IUpdateContactForm,
}
