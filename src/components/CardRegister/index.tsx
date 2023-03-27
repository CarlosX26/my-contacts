import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthContext } from "../../contexts/authContext"

const registerSchema = z
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

export type IRegisterData = z.infer<typeof registerSchema>

interface ICardResgisterProps {
  toggleCard(card: string): void
}

const CardRegister = ({ toggleCard }: ICardResgisterProps) => {
  const { signUp } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  return (
    <FormControl
      onSubmit={handleSubmit(signUp as SubmitHandler<FieldValues>)}
      isRequired
      as={motion.form}
      bg="gray.100"
      p="16px"
      borderRadius="16px"
      display="flex"
      flexDir="column"
      gap="16px"
      w={{ base: "100%", md: "50%" }}
      animate={{ opacity: [0, 1] }}
    >
      <Heading>Cadastro</Heading>
      <FormLabel>Nome completo</FormLabel>
      <Input
        type="text"
        placeholder="Digite seu nome completo."
        {...register("fullName")}
      />
      <Text fontSize="x-small" color="red.400">
        {errors.fullName?.message as string}
      </Text>
      <FormLabel>Email</FormLabel>
      <Input
        type="text"
        placeholder="Digite seu email."
        {...register("email")}
      />
      <Text fontSize="x-small" color="red.400">
        {errors.email?.message as string}
      </Text>
      <FormLabel>Telefone</FormLabel>
      <Input
        type="tel"
        placeholder="Digite seu telefone."
        {...register("phoneNumber")}
      />
      <Text fontSize="x-small" color="red.400">
        {errors.phoneNumber?.message as string}
      </Text>
      <FormLabel>Senha</FormLabel>
      <Input
        type="password"
        placeholder="Digite sua senha."
        {...register("password")}
      />
      <Text fontSize="x-small" color="red.400">
        {errors.password?.message as string}
      </Text>
      <FormLabel>Confirmar Senha</FormLabel>
      <Input
        type="password"
        placeholder="Digite novamente sua senha."
        {...register("confirmPassword")}
      />
      <Text fontSize="x-small" color="red.400">
        {errors.confirmPassword?.message as string}
      </Text>
      <Button
        type="submit"
        bg="cyan.600"
        borderRadius="8px"
        fontWeight="bold"
        color="gray.100"
        p="16px"
        width="100%"
        _hover={{ bg: "cyan.700" }}
      >
        Cadastrar-se
      </Button>
      <Text>
        Já possui cadastro?{" "}
        <Link color="cyan.600" onClick={() => toggleCard("login")}>
          login
        </Link>
      </Text>
    </FormControl>
  )
}

export default CardRegister
