import { DeleteIcon } from "@chakra-ui/icons"
import { Avatar, Button, Flex, ListItem, Stack, Text } from "@chakra-ui/react"

const CardContact = () => {
  return (
    <ListItem
      bg="gray.300"
      borderRadius="8px"
      p="16px"
      pos="relative"
      display="flex"
      alignItems="center"
      gap="32px"
    >
      <Stack>
        <Avatar name="Contato Teste" />
      </Stack>
      <Flex flexDir="column">
        <Text fontWeight="bold" fontSize="lg">
          Nome completo
        </Text>
        <Text>algumemail@mail.com</Text>
        <Text>12345678911</Text>
      </Flex>
      <Button pos="absolute" top="16px" right="16px">
        <DeleteIcon color="red.400" />
      </Button>
    </ListItem>
  )
}
export default CardContact
