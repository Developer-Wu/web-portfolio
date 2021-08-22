import {Image, Heading, Text, Flex, VStack, Box, Spacer, Center } from "@chakra-ui/react"
import {date} from "../components/Date"
import {TestimonialItem} from "../components/TestimonialItem"



function Testimonials(props) {
    return (
        <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY="auto" width="98%" maxW="1250px" height="100%">
        <VStack alignItems="flex-start">
        <Text>Last login: {date} at public IP {props.ipItem.query} from {props.ipItem.country}</Text>
        <Spacer/>
        <Heading>testmonials</Heading>
        <Spacer/>
        <Flex flexDir="column" justifyContent="space-between">
            {props.testimonials.map(item => {return (<TestimonialItem client={item.client} link={item.link} content={item.content}/>)})}

       
        </Flex>
         </VStack>
        </Box>
    )
}

export async function getStaticProps() {
    const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    const ipItem = await resip.json()
    const tesimonialRes = await fetch('http://localhost:1337/testimonials')
    const testimonials = await tesimonialRes.json()
    return {
        props:{
            ipItem,
            testimonials
        }
    }
}

export default Testimonials