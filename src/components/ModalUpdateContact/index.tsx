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
import { z } from "zod"

const contactUpdate = z.object({
  fullName: z.string().min(3).max(128),
  email: z.string().email(),
  phoneNumber: z.string().min(11).max(11),
})

export type IContactUpdate = z.infer<typeof contactUpdate>

const ModalUpdateContact = () => {
  const { contact, updateContact } = useContactContext()

  const { register, handleSubmit } = useForm<IContactUpdate>({
    resolver: zodResolver(contactUpdate),
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
            Atualizar informações
          </Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalUpdateContact
