import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from "@chakra-ui/react"
import { useContactContext } from "../../contexts/contactContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { IRegisterContactForm } from "../../validations/types"
import { RegisterContactForm } from "../../validations/contact"

interface IModalNewContactProps {
  onClose(): void
}

const ModalNewContact = ({ onClose }: IModalNewContactProps) => {
  const { newContact } = useContactContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterContactForm>({
    resolver: zodResolver(RegisterContactForm),
  })

  return (
    <ModalContent mx="16px">
      <ModalHeader>Adicionar Contato</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl
          onSubmit={handleSubmit((data) => newContact(data, onClose))}
          as={motion.form}
          display="flex"
          flexDir="column"
          gap="8px"
        >
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Digite o nome do contato."
            {...register("fullName")}
          />
          <Text fontSize="x-small" color="red.400">
            {errors.fullName?.message as string}
          </Text>

          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite o email do contato."
            {...register("email")}
          />
          <Text fontSize="x-small" color="red.400">
            {errors.email?.message as string}
          </Text>

          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            placeholder="Digite o telefone do contato."
            {...register("phoneNumber")}
          />
          <Text fontSize="x-small" color="red.400">
            {errors.phoneNumber?.message as string}
          </Text>

          <Button type="submit">Cadastrar contato</Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalNewContact
