import {Flex, Heading, Divider, Text, Button, Link, Spacer, VStack} from "@chakra-ui/react"

function PortfolioItem(props) {
    return (

            <VStack key={props.item.id} alignItems="flex-start" spacing="5px" backgroundImage="" borderColor={props.color} borderWidth="2px" padding="10px" borderStyle="dashed">
        <Heading fontSize="lg" href="">{props.item.title}</Heading>
        <Spacer/>
        <Divider variant="dashed" borderWidth="1px" borderColor={props.color} />
        <Spacer/>
        <Text><Text as="span" fontWeight="black">Technology Used:</Text> {props.item.lu_technologies.map(tech => tech.tech).join(',')}</Text>
        <Spacer/>
        <Text><Text as="span" fontWeight="black">Description:</Text> {props.item.description}</Text>
        <Spacer/>
        <Button _hover={{backgroundColor:"brand.hover", color:"white", borderColor:"white"}} borderColor={props.color} borderWidth="2px" padding="5px">
        <Spacer/>
        <Link _hover={{textDecoration:"none"}} href={props.item.link} fontWeight="black" fontSize="sm">Click here to view!</Link>
        </Button>
    </VStack>
            )

}


export {PortfolioItem}