import {Link,Button,Image, Heading, Text, Flex, VStack, Box, Spacer, Center } from "@chakra-ui/react"

function TestimonialItem(props) {
    return (
        <Text lineHeight="28px" border="2px" borderColor="brand.main" padding="13px">{props.content}<br/><br/>
<Flex alignItems="center" justifyContent="space-between"><Text fontWeight="600">--{props.client}</Text>{props.link ? <Button _hover={{backgroundColor:"brand.hover", color:"white", borderColor:"brand.hover"}} borderColor="brand.main" borderWidth="2px" padding="5px">
        <Link _hover={{textDecoration:"none"}} href={props.link} fontWeight="black" fontSize="sm">Link to work</Link>
        </Button>:null}</Flex></Text>
    )
}

export {TestimonialItem}