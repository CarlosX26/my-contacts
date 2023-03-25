import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react"

const ModalNewContact = () => {
  return (
    <ModalContent>
      <ModalHeader>Adicionar Contato</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl display="flex" flexDir="column" gap="16px">
          <FormLabel>Nome</FormLabel>
          <Input type="text" placeholder="Digite o nome do contato." />
          <FormLabel>Email</FormLabel>
          <Input type="text" placeholder="Digite o email do contato." />
          <FormLabel>Telefone</FormLabel>
          <Input type="text" placeholder="Digite o telefone do contato." />
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
            Cadastrar contato
          </Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalNewContact
