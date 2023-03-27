import { Flex, Input } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { useContactContext } from "../../../contexts/contactContext"

const HeaderContactList = () => {
  const { setFilterContact } = useContactContext()

  return (
    <Flex pos="relative" mt="32px" w="100%">
      <Input
        h="24px"
        color="gray.100"
        type="text"
        placeholder="Digite um contato."
        borderRadius="64px"
        justifySelf="end"
        onChange={(e) => setFilterContact(e.target.value)}
      />
      <Search2Icon pos="absolute" right="16px" top="4px" color="gray.100" />
    </Flex>
  )
}

export default HeaderContactList
