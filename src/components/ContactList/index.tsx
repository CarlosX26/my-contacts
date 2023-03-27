import { AddIcon } from "@chakra-ui/icons"
import { Button, Flex, UnorderedList, Text } from "@chakra-ui/react"
import { useContactContext } from "../../contexts/contactContext"
import CardContact from "./CardContact"
import HeaderContactList from "./HeaderContactList"

interface IContactListProps {
  openModal(): void
  toggleModal(modal: string): void
}

const ContactList = ({ openModal, toggleModal }: IContactListProps) => {
  const { contacts, filterContact } = useContactContext()

  const filteredContacts = contacts?.filter((e) => {
    const contactName = e.fullName.toLowerCase()

    return contactName.includes(filterContact.toLowerCase().trim())
  })
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
        {filteredContacts?.map((contact) => (
          <CardContact
            key={contact.id}
            contact={contact}
            openUpdateContact={openModal}
            toggleModal={toggleModal}
          />
        ))}
        {filteredContacts?.length === 0 && (
          <Text>Nenhum contato encontrado :/</Text>
        )}
      </UnorderedList>
      <Button
        pos="absolute"
        right="16px"
        bottom="16px"
        bg="cyan.600"
        _hover={{ bg: "cyan.700" }}
        onClick={() => {
          openModal()
          toggleModal("newContact")
        }}
      >
        <AddIcon color="gray.100" />
      </Button>
    </Flex>
  )
}
export default ContactList
