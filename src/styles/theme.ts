import { extendTheme } from "@chakra-ui/react"

import Input from "./components/input"
import Button from "./components/button"

const theme = extendTheme({
  components: {
    Button,
    Input,
  },
})

export { theme }
