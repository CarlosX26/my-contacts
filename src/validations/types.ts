import { z } from "zod"
import { LoginForm } from "./auth"

type ILoginForm = z.infer<typeof LoginForm>

export type { ILoginForm }
