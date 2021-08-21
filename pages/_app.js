import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "../theme"
import Layout from "../components/Layout"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
        <ColorModeScript initialColorMode="light"/>
      </Layout>

    </ChakraProvider>

    )
}

export default MyApp
