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
import { useContactContext } from "../../contexts/contactContext"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"

const newContactSchema = z.object({
  fullName: z.string().min(3).max(128),
  email: z.string().email(),
  phoneNumber: z.string().min(11).max(11),
})

export type INewContact = z.infer<typeof newContactSchema>

const ModalNewContact = () => {
  const { newContact } = useContactContext()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newContactSchema),
  })
  return (
    <ModalContent mx="16px">
      <ModalHeader>Adicionar Contato</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl
          onSubmit={handleSubmit(newContact as SubmitHandler<FieldValues>)}
          as={motion.form}
          display="flex"
          flexDir="column"
          gap="16px"
        >
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Digite o nome do contato."
            {...register("fullName")}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Digite o email do contato."
            {...register("email")}
          />
          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            placeholder="Digite o telefone do contato."
            {...register("phoneNumber")}
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
            Cadastrar contato
          </Button>
        </FormControl>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalNewContact
