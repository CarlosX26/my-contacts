import { Avatar, Flex, Heading, Stack } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
      h="56px"
      bg="cyan.600"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="64px"
      p="16px"
    >
      <Heading color="gray.100" fontSize="lg">
        My Contacts
      </Heading>

      <Stack>
        <Avatar name="Carlos Jr." />
      </Stack>
    </Flex>
  )
}

export default Header
