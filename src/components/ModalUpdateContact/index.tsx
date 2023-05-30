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
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { useContactContext } from "../../contexts/contactContext"
import { IUpdateContactForm } from "../../validations/types"
import { UpdateContactForm } from "../../validations/contact"

const ModalUpdateContact = () => {
  const { contact, updateContact } = useContactContext()

  const { register, handleSubmit } = useForm<IUpdateContactForm>({
    resolver: zodResolver(UpdateContactForm),
  })

  return (
    <ModalContent mx="16px">
      <ModalHeader>Atualizar Contato</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl
          onSubmit={handleSubmit(updateContact)}
          as={motion.form}
          display="flex"
          flexDir="column"
          gap="16px"
        >
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Digite o nome do contato."
            {...register("fullName", { value: contact?.fullName })}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite o email do contato."
            {...register("email", { value: contact?.email })}
          />
          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            placeholder="Digite o telefone do contato."
            {...register("phoneNumber", { value: contact?.phoneNumber })}
          />
          <Button type="submit">Atualizar informações</Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalUpdateContact
