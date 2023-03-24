import { Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import CardContact from "./CardContact"
import HeaderContactList from "./HeaderContactList"

const ContactList = () => {
  return (
    <Flex flexDir="column" alignItems="center" gap="16px">
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
            background: "gray",
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
    </Flex>
  )
}
export default ContactList
