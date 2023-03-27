import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface ICardPresentationProps {
  toggleCard(card: string): void
}

const CardPresentation = ({ toggleCard }: ICardPresentationProps) => {
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
      <Button
        bg="cyan.600"
        borderRadius="8px"
        fontWeight="bold"
        color="gray.100"
        p="16px"
        width="100%"
        _hover={{ bg: "cyan.700" }}
        onClick={() => toggleCard("login")}
      >
        Login
      </Button>
      <Button
        borderRadius="8px"
        fontWeight="bold"
        p="16px"
        width="100%"
        outline="2px solid"
        outlineColor="cyan.600"
        color="cyan.600"
        onClick={() => toggleCard("register")}
      >
        Inscreva-se
      </Button>
    </Flex>
  )
}

export default CardPresentation
