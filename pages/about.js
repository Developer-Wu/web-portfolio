import { Image, Heading, Text, Flex, VStack, Box, Spacer, Center } from "@chakra-ui/react"
import { date } from "../components/Date"
import Layout from "../components/Layout"

function About(props) {
    return (
        <Box px={{ base: "10px", sm: "10px", md: "0px", lg: "0px" }} display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY={{ base: "", sm: "auto" }} width="98%" maxW="1250px" height="100%">
            <VStack alignItems="flex-start">
                <Text>Last login: {date} at public IP {props.ipItem.query} from {props.ipItem.country}</Text>
                <Spacer />
                <Heading>About</Heading>
                <Spacer />
                <Flex flexDir={{ base: "column", sm: "row", md: "row", lg: "row" }} spacing="25px" justifyContent="space-between" alignItems="flex-start">
                    <Image pr={{ base: "0", sm: "10px", md: "20px", lg: "20px" }} pb={{ base: "20px", sm: "20px", md: "0", lg: "0" }} src="/images/dan.png" alt="profile-picture" />
                    <Spacer />
                    <VStack pb={{ base: "20px", sm: "20px", md: "0px", lg: "0px" }} alignItems="flex-start">
                        <Heading>Hey there!</Heading>
                        <Text textAlign="left">{props.about.map(item => item.description)}</Text>

                    </VStack>
                </Flex>
            </VStack>
        </Box>
    )
}

export async function getStaticProps() {
    const res = await fetch(process.env.BACKEND_URL + "about-pgs")
    const about = await res.json()
    const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    const ipItem = await resip.json()
    return {
        props: {
            ipItem,
            about
        },
        revalidate: 10,
    }
}

export default About

About.PageLayout = Layout