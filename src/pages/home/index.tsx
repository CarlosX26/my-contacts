import { Flex, Image } from "@chakra-ui/react"
import illustration from "../../assets/illustration.png"
import CardLogin from "../../components/CardLogin"
import CardPresentation from "../../components/CardPresentation"
import CardRegister from "../../components/CardRegister"
import { useAuthContext } from "../../contexts/authContext"

const Home = () => {
  const { card, toggleCard } = useAuthContext()

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="space-between">
      <Image
        src={illustration}
        alt="illustration"
        width="320px"
        display={{ base: "none", md: "inline-block" }}
      />
      {card === "presentation" && <CardPresentation toggleCard={toggleCard} />}
      {card === "register" && <CardRegister toggleCard={toggleCard} />}
      {card === "login" && <CardLogin toggleCard={toggleCard} />}
    </Flex>
  )
}

export default Home
