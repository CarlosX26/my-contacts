import { Flex, Image } from "@chakra-ui/react"
import { useAuthContext } from "../../contexts/authContext"
import illustration from "../../assets/illustration.png"
import CardLogin from "../../components/CardLogin"
import CardPresentation from "../../components/CardPresentation"
import CardRegister from "../../components/CardRegister"

const Home = () => {
  const { card } = useAuthContext()

  const cards: {
    [key: string]: JSX.Element
  } = {
    presentation: <CardPresentation />,
    register: <CardRegister />,
    login: <CardLogin />,
  }

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="space-between">
      <Image
        src={illustration}
        alt="illustration"
        width="320px"
        display={{ base: "none", md: "inline-block" }}
      />

      {cards[card]}
    </Flex>
  )
}

export default Home
