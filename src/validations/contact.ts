import { z } from "zod"

const RegisterContactForm = z.object({
  fullName: z.string().min(3).max(128),
  email: z.string().email(),
  phoneNumber: z.string().min(11).max(11),
})

const UpdateContactForm = RegisterContactForm.partial()

export { RegisterContactForm, UpdateContactForm }
