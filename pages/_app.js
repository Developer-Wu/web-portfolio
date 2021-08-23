import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "../theme"
import Layout from "../components/Layout"
import {Router} from "next/router"
import {useState} from "react"
import {Loader} from "../components/Loading"


function MyApp({ Component, pageProps }) {

  const [routerChanging, toggleRouterChange] = useState(false)

  Router.events.on("routeChangeStart", (url) => {
    toggleRouterChange(true)
  })

  Router.events.on("routeChangeComplete", (url) => {
    toggleRouterChange(false)
  })


  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {routerChanging ? null:<Component {...pageProps} />}
        {routerChanging ? <Loader/>:null}

        <ColorModeScript initialColorMode="dark"/>
      </Layout>

    </ChakraProvider>

    )
}

export default MyApp
