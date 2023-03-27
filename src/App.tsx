import { Box, ChakraProvider, Container } from "@chakra-ui/react"
import RoutesIndex from "./routes/routesIndex"

const App = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.600">
        <Container maxW="container.xl" minH="100vh">
          <RoutesIndex />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
