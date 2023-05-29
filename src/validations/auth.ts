import { z } from "zod"

const LoginForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

export { LoginForm }
