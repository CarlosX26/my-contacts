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
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { useContactContext } from "../../contexts/contactContext"
import { IUpdateContactForm } from "../../validations/types"
import { UpdateContactForm } from "../../validations/contact"

const ModalUpdateContact = () => {
  const { contact, updateContact } = useContactContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateContactForm>({
    resolver: zodResolver(UpdateContactForm),
    defaultValues: { ...contact },
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

          <Button type="submit">Atualizar informações</Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalUpdateContact
