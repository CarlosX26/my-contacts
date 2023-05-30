import { defineStyleConfig } from "@chakra-ui/react"

const Button = defineStyleConfig({
  variants: {
    solid: {
      bg: "cyan.600",
      borderRadius: "lg",
      fontWeight: "bold",
      color: "gray.100",
      p: "1",
      w: "100%",
      _hover: { bg: "cyan.700" },
    },
    outline: {
      borderRadius: "lg",
      fontWeight: "bold",
      p: "1",
      w: "100%",
      color: "cyan.600",
      border: "2px solid",
      borderColor: "cyan.600",
      _hover: { bg: "gray.200" },
    },
  },
  defaultProps: {
    variant: "solid",
  },
})

export default Button
