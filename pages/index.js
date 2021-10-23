import { useColorMode, HStack, List, VStack, Box, Circle, useProps } from "@chakra-ui/react"
import { Nav } from "../components/Nav"
import { HomeContent } from "../components/HomeContent"
import Layout from "../components/Layout"

function Home(props) {

  return (
    <HomeContent ipItem={props.ipItem} />
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
  const ipItem = await resip.json()


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ipItem,
    },
    revalidate: 10,
  }
}

export default Home

Home.PageLayout = Layout

