import { z } from "zod"
import { LoginForm } from "./auth"
import { RegisterForm, UpdateForm } from "./user"

type ILoginForm = z.infer<typeof LoginForm>

type IRegisterForm = z.infer<typeof RegisterForm>

type IUpdateForm = z.infer<typeof UpdateForm>

export type { ILoginForm, IRegisterForm, IUpdateForm }
