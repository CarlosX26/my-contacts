import { z } from "zod"

const RegisterContactForm = z.object({
  fullName: z
    .string()
    .min(3, "Mínimo 3 caracteres.")
    .max(128, "Máximo 128 caracteres."),
  email: z.string().email("Email inválido.").max(128, "Máximo 128 caracteres."),
  phoneNumber: z
    .string()
    .min(11, "Mínimo de 11 dígitos.")
    .max(11, "Máximo de 11 dígitos."),
})

const UpdateContactForm = RegisterContactForm.partial()

export { RegisterContactForm, UpdateContactForm }
