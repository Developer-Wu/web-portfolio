import { Code, 
    Image, 
    ListItem, 
    Link, 
    UnorderedList, 
    Heading, 
    Text, 
    Flex, 
    useColorMode, 
    HStack, List, VStack, Box, Circle, Spacer, Grid, Button, useColorModeValue } from "@chakra-ui/react"
import { Nav } from "../../components/Nav"
import { Divider } from "@chakra-ui/react"
import { useState } from "react"
import { PortfolioItem } from "../../components/PortfolioItem"
import { HomeLink } from "../../components/HomeLink"
import {date} from "../../components/Date"


function Portfolio(props) {
    console.log(props.ipItem)
    console.log(props.automationItem)
    const [buttonColor, toggleButtonColor] = useState(false)
    const brandColor = useColorModeValue("black","brand.main")

    return (
        <Box pb={{base:"20px", md:"20px", lg:"20px"}} px={{base:"10px", sm:"10px", md:"0px", lg:"0px"}} display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px"  overflowY={{base:"", sm:"auto"}} width="98%" maxW="1250px" height="100%">
            <VStack spacing="20px" alignItems="flex-start">
                <Text>Last login: {date} at public IP {props.ipItem.query} from {props.ipItem.country}</Text>
                <Spacer />
                <Heading>Portfolio</Heading>
                <Text>This is my personal portfolio to showcase some of my best and most relevant development work. I work with a variety of projects as you can see below such as
                    Wordpress (elementor, crocoblocks), and can write confidently in a variety of markup/programming languages such as Javascript, Python etc. If you like what you
                    see, hmu and let&apos;s chat about your next big project!
                </Text>
                <Spacer />
                <UnorderedList display="flex" flexDir="column" justifyContent="space-between" height="120px" listStyleType="none" maxW="1250px" width="100%">
                    <HomeLink link="/portfolio/web-development" text="web development"/>
                    <HomeLink link="/portfolio/automation" text="automation and scripting"/>
                    <HomeLink link="/portfolio/misc-items" text="misc"/>
                </UnorderedList>


            </VStack>
            

        </Box>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const resAuto = await fetch(process.env.BACKEND_URL + 'automation-items')
    const automationItem = await resAuto.json()
    const resWeb = await fetch(process.env.BACKEND_URL + 'web-dev-items')
    const portfolioItem = await resWeb.json()
    const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    const ipItem = await resip.json()

  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
          ipItem,
          portfolioItem,
          automationItem
      },
      revalidate: 10, 
    }
  }

export default Portfolio