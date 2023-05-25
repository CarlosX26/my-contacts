import { z } from "zod"
import { LoginForm, RegisterForm } from "./auth"

type ILoginForm = z.infer<typeof LoginForm>

type IRegisterForm = z.infer<typeof RegisterForm>

export type { ILoginForm, IRegisterForm }
