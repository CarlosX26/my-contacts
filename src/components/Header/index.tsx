import {
  Avatar,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react"

interface IHeaderProps {
  openProfile(): void
}

const Header = ({ openProfile }: IHeaderProps) => {
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
          <MenuItem onClick={openProfile}>Ver Perfil</MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header
