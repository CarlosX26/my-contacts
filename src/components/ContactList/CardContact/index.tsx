import { DeleteIcon } from "@chakra-ui/icons"
import { Avatar, Button, Flex, ListItem, Stack, Text } from "@chakra-ui/react"
import { useContactContext } from "../../../contexts/contactContext"

interface ICardContactProps {
  fullName: string
  email: string
  phoneNumber: string
  contactId: string
}

const CardContact = ({
  fullName,
  email,
  phoneNumber,
  contactId,
}: ICardContactProps) => {
  const { deleteContact } = useContactContext()

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
    >
      <Stack>
        <Avatar name={fullName} />
      </Stack>
      <Flex flexDir="column">
        <Text fontWeight="bold" fontSize="lg">
          {fullName}
        </Text>
        <Text>{email}</Text>
        <Text>{phoneNumber}</Text>
      </Flex>
      <Button
        pos="absolute"
        top="16px"
        right="16px"
        onClick={() => deleteContact(contactId)}
      >
        <DeleteIcon color="red.400" />
      </Button>
    </ListItem>
  )
}
export default CardContact
