import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Avatar,
  Heading,
  FormControl,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthContext } from "../../contexts/authContext"
import { motion } from "framer-motion"

const profileUpdateSchema = z
  .object({
    fullName: z.string().max(128),
    email: z.string().email(),
    phoneNumber: z.string().max(11).min(11),
    password: z.string(),
  })
  .partial()

export type IUserUpdate = z.infer<typeof profileUpdateSchema>

const ModalProfile = () => {
  const { user, updateUser } = useAuthContext()

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(profileUpdateSchema),
  })

  return (
    <ModalContent mx="16px">
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
          <Avatar name={user?.fullName} />
        </Stack>
        <Heading>{user?.fullName}</Heading>
      </ModalBody>
    </ModalContent>
  )
}

export default ModalProfile
