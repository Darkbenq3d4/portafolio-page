import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Rancho",
    body: "Raleway",
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Maitree",
      }
    }
  },
})

export default theme