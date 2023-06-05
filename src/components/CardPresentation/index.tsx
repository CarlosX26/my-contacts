import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useAuthContext } from "../../contexts/authContext"

const CardPresentation = () => {
  const { toggleCard } = useAuthContext()

  return (
    <Flex
      w={{ base: "100%", md: "320px" }}
      as={motion.div}
      bg="gray.100"
      borderRadius="8px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="16px"
      p="32px"
      animate={{ opacity: [0, 1] }}
    >
      <Heading>My Contacts</Heading>
      <Text fontStyle="italic" fontSize={{ base: "sm", md: "sm" }}>
        Gerencie seus contatos de um jeito inovador.
      </Text>
      <Button onClick={() => toggleCard("login")}>Login</Button>
      <Button variant="outline" onClick={() => toggleCard("register")}>
        Inscreva-se
      </Button>
    </Flex>
  )
}

export default CardPresentation
