import {
    Code,
    Image,
    ListItem,
    Link,
    UnorderedList,
    Heading,
    Text,
    Flex,
    useColorMode,
    HStack, List, VStack, Box, Circle, Spacer, Grid, Button, useColorModeValue
} from "@chakra-ui/react"
import { Nav } from "../../components/Nav"
import { Divider } from "@chakra-ui/react"
import { useState } from "react"
import { PortfolioItem } from "../../components/PortfolioItem"
import { date } from "../../components/Date"

function Portfolio(props) {
    console.log(props.ipItem)
    console.log(props.automationItem)
    const [buttonColor, toggleButtonColor] = useState(false)
    const brandColor = useColorModeValue("black", "brand.main")


    return (
        <Box pb={{ base: "20px", md: "20px", lg: "20px" }} px={{ base: "10px", sm: "10px", md: "0px", lg: "0px" }} display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY="auto" width="98%" maxW="1250px" height="100%">
            <VStack alignItems="flex-start">
                <Text>Last login: {date} at public IP {props.ipItem.query} from {props.ipItem.country}</Text>
                <Spacer />
                <Heading>automation and scripting</Heading>
                <Spacer />

                <Spacer />
                <Grid height="100%" gridGap="20px" width="100%" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))">
                    {props.portfolioItem.length != 0 ? props.portfolioItem.map(item => <PortfolioItem item={item} color={brandColor} />) : <Text>No projects here yet :), please check back later!</Text>}

                </Grid>
                <Spacer />

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

    const resAuto = await fetch('http://localhost:1337/automation-items')
    const portfolioItem = await resAuto.json()
    const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    const ipItem = await resip.json()


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            ipItem,
            portfolioItem,

        },
    }
}

export default Portfolio