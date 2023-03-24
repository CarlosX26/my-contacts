import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react"

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

      <Menu>
        <MenuButton>
          <Stack>
            <Avatar name="Carlos Jr." />
          </Stack>
        </MenuButton>
        <MenuList>
          <MenuItem>Ver Perfil</MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header
