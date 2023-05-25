import { z } from "zod"

const LoginForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

const RegisterForm = z
  .object({
    fullName: z
      .string()
      .min(3, "Mínimo 3 caracteres.")
      .max(128, "Máximo 128 caracteres."),
    email: z
      .string()
      .email("Email inválido.")
      .max(128, "Máximo 128 caracteres."),
    phoneNumber: z
      .string()
      .min(11, "Mínimo de 11 dígitos.")
      .max(11, "Máximo de 11 dígitos."),
    password: z
      .string()
      .regex(/[A-Z]/, "Mínimo de 1 letra maiúscula.")
      .regex(/[a-z]/, "Mínimo de 1 letra minuscula.")
      .regex(/(\d)/, "Mínimo 1 número.")
      .regex(/(\W)|_/, "Mínimo de 1 caractere especial.")
      .regex(/(.{8,})|_/, "Mínimo de 8 caracteres."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  })

export { LoginForm, RegisterForm }
