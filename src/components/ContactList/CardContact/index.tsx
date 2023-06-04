import { DeleteIcon } from "@chakra-ui/icons"
import {
  Avatar,
  Button,
  Flex,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useContactContext } from "../../../contexts/contactContext"
import { IContact } from "../../../contexts/types"
import AlertDialogContact from "../../AlertDialogContact"

interface ICardContactProps {
  contact: IContact
  openUpdateContact(): void
  toggleModal(modal: string): void
}

const CardContact = ({
  contact,
  openUpdateContact,
  toggleModal,
}: ICardContactProps) => {
  const { setContact } = useContactContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ListItem
        cursor="pointer"
        bg="gray.300"
        borderRadius="8px"
        p="16px"
        pos="relative"
        display="flex"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        gap="32px"
        onClick={(e) => {
          e.stopPropagation()
          setContact(contact)
          toggleModal("updateContact")
          openUpdateContact()
        }}
      >
        <Stack>
          <Avatar name={contact.fullName} />
        </Stack>
        <Flex flexDir="column">
          <Text fontWeight="bold" fontSize="lg">
            {contact.fullName}
          </Text>
          <Text>{contact.email}</Text>
          <Text>{contact.phoneNumber}</Text>
        </Flex>
        <Button
          w="40px"
          bg="gray.100"
          pos="absolute"
          top="16px"
          right="16px"
          _hover={{ bg: "gray.200" }}
          onClick={(e) => {
            e.stopPropagation()
            setContact(contact)
            onOpen()
          }}
        >
          <DeleteIcon color="red.400" />
        </Button>
      </ListItem>
      <AlertDialogContact isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default CardContact
