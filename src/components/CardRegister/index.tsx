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
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useAuthContext } from "../../contexts/authContext"
import { RegisterForm } from "../../validations/auth"
import { IRegisterForm } from "../../validations/types"

interface ICardResgisterProps {
  toggleCard(card: string): void
}

const CardRegister = ({ toggleCard }: ICardResgisterProps) => {
  const { signUp } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: zodResolver(RegisterForm),
  })

  return (
    <FormControl
      onSubmit={handleSubmit(signUp)}
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
