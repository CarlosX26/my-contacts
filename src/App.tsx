import { Box, ChakraProvider, Container } from "@chakra-ui/react"
import RoutesIndex from "./routes/routesIndex"
import { theme } from "./styles/theme"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.600">
        <Container maxW="container.xl" minH="100vh">
          <RoutesIndex />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
