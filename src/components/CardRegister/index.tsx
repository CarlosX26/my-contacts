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

interface ICardResgisterProps {
  toggleCard(card: string): void
}

const CardRegister = ({ toggleCard }: ICardResgisterProps) => {
  return (
    <FormControl
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
      <Input type="text" placeholder="Digite seu nome completo." />
      <FormLabel>Email</FormLabel>
      <Input type="text" placeholder="Digite seu email." />
      <FormLabel>Telefone</FormLabel>
      <Input type="tel" placeholder="Digite seu telefone." />
      <FormLabel>Senha</FormLabel>
      <Input type="password" placeholder="Digite sua senha." />
      <FormLabel>Confirmar Senha</FormLabel>
      <Input type="password" placeholder="Digite novamente sua senha." />
      <Button
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
