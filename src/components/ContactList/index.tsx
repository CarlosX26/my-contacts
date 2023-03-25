import { AddIcon } from "@chakra-ui/icons"
import { Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import CardContact from "./CardContact"
import HeaderContactList from "./HeaderContactList"

const ContactList = () => {
  return (
    <Flex flexDir="column" alignItems="center" gap="16px" pos="relative">
      <HeaderContactList />
      <UnorderedList
        display="flex"
        flexDir="column"
        bg="gray.100"
        borderRadius="8px"
        listStyleType="none"
        height="80vh"
        w="100%"
        p="16px"
        gap="16px"
        m="0"
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#CBD5E0",
            borderRadius: "8px",
          },
        }}
      >
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />
      </UnorderedList>
      <Button
        pos="absolute"
        right="16px"
        bottom="16px"
        bg="cyan.600"
        _hover={{ bg: "cyan.700" }}
      >
        <AddIcon color="gray.100" />
      </Button>
    </Flex>
  )
}
export default ContactList
