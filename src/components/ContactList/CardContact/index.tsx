import { DeleteIcon } from "@chakra-ui/icons"
import { Avatar, Button, Flex, ListItem, Stack, Text } from "@chakra-ui/react"
import { IContact, useContactContext } from "../../../contexts/contactContext"

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
  const { deleteContact, setContact } = useContactContext()

  return (
    <ListItem
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
        pos="absolute"
        top="16px"
        right="16px"
        onClick={(e) => {
          e.stopPropagation()
          deleteContact(contact.id)
        }}
      >
        <DeleteIcon color="red.400" />
      </Button>
    </ListItem>
  )
}
export default CardContact
