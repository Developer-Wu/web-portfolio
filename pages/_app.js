import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "../theme"
import Layout from "../components/Layout"
import { Router } from "next/router"
import { useState } from "react"
import { Loader } from "../components/Loading"
import 'react-datepicker/dist/react-datepicker.css';
import { AppProps } from "next/app"




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

      {routerChanging ? <Layout><Loader /> </Layout> : Component.PageLayout ?
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout> :
        <Component {...pageProps} />}


      <ColorModeScript initialColorMode="dark" />
    </ChakraProvider>

  )

}

export default MyApp
