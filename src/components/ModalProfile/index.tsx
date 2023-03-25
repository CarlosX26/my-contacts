import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Avatar,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"

const ModalProfile = () => {
  const [field, setField] = useState("")

  const getPlaceholder = (field: string) => {
    let placeholder = "Digite "
    if (field === "fullName") {
      placeholder += "seu novo nome completo."
    }
    if (field === "email") {
      placeholder += "seu novo email."
    }
    if (field === "phoneNumber") {
      placeholder += "seu novo telefone."
    }
    if (field === "password") {
      placeholder += "sua nova senha."
    }
    return placeholder
  }

  return (
    <ModalContent>
      <ModalHeader>Meu Perfil</ModalHeader>
      <ModalCloseButton />
      <ModalBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        <Stack>
          <Avatar name="Carlos Jr." />
        </Stack>
        <Heading>Carlos Jr.</Heading>
        <FormControl display="flex" flexDir="column" gap="16px">
          <Select
            placeholder="Deseja atualizar seus dados?"
            onChange={(e) => setField(e.target.value)}
          >
            <option value="fullName">Nome Completo</option>
            <option value="email">Email</option>
            <option value="phoneNumber">Telefone</option>
            <option value="password">Senha</option>
          </Select>
          {field && <Input type="text" placeholder={getPlaceholder(field)} />}
          {field && (
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
              Atualizar Informação
            </Button>
          )}
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalProfile
