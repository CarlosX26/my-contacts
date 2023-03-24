import { Flex, Image } from "@chakra-ui/react"
import { useState } from "react"
import illustration from "../../assets/illustration.png"
import CardLogin from "../../components/CardLogin"
import CardPresentation from "../../components/CardPresentation"
import CardRegister from "../../components/CardRegister"

const Home = () => {
  const [card, setCard] = useState("presentation")

  const toggleCard = (card: string): void => {
    setCard(card)
  }

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="space-between">
      <Image src={illustration} alt="illustration" width="320px" />
      {card === "presentation" && <CardPresentation toggleCard={toggleCard} />}
      {card === "register" && <CardRegister toggleCard={toggleCard} />}
      {card === "login" && <CardLogin toggleCard={toggleCard} />}
    </Flex>
  )
}

export default Home
