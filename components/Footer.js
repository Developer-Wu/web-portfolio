import {ImGithub} from "react-icons/im"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {Button, useColorMode, HStack, List, VStack, Link, Text } from "@chakra-ui/react"

function Footer() {
    var today = new Date();
    var year = today.getFullYear()
    return (
        <HStack pl={{base:"30px",md:"60px",lg:"0px"}} pr={{base:"30px",md:"60px",lg:"0px"}}
        py={{base:"15px"}} 
        bottom={{base:"20px",sm:"20px", md:"30px",lg:"30px"}}
        bottom="0"
        backgroundColor={{base:"#000", sm:"none"}}
        borderColor="brand.main" borderTopWidth={{base:"2px", sm:"0px"}}
        pos={{base:"fixed", sm:"relative"}} 
        align="center" 
        justify="flex-end" 
        spacing="20px" 
        width="100%" 
        maxWidth="1250px">
        <Text fontSize={{base:"0.8em",sm:"1em", md:"1em", lg:"1em"}}>Designed by Dan Wu Copyright {year}</Text>
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=85295355691&text=Feel%20free%20to%20message%20me%20for%20any%20of%20your%20tech%20needs!"><AiOutlineWhatsApp size="30px"/></Link>
        <Link href="https://www.instagram.com/developerdanwu/" target="_blank"><GrInstagram size="30px"/></Link>
        <Link target="_blank" href="https://github.com/Developer-Wu"><ImGithub size="30px"/></Link>
    </HStack>
    )
}

export {Footer}