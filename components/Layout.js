import Nav from "../components/Nav"
import { Footer } from "../components/Footer"
import { 
    HStack, 
    Box, 
    Circle, 
    Text,
    Flex,
VStack, useColorModeValue, useColorMode} from "@chakra-ui/react"
import { useState } from "react"
import {HomeContent} from "../components/HomeContent"





function Layout({children}, props) {

    const {colorMode, toggleColorMode}  = useColorMode()
    return (
        <Flex height={{base:"100vh", sm:"100vh", md:"100vh", lg:"100vh"}} justifyContent="space-between" alignItems="center" flexDir="column" px={{base:"13px", sm:"20px", md:"20px", lg:"20px"}}  justify="center" width="100%" maxH="1200px">
        <Nav/>
        <Box ml="20px" mr="20px"
        overflowY="hidden"
        zIndex="5"
        whiteSpace="normal"
        pos="relative"
        borderRadius="20px"
        border="2px solid gray"
        width="100%" 
        height="80%"
        maxHeight="1200px"
        maxWidth="1250px" 
        backgroundImage={colorMode === "light" ? "url('/images/console-bg-light.png')":"url('/images/console-bg-dark.png')"}
        display="flex" 
        flexDir="column" 
        alignItems="center" 
        justifyContent="flex-start"
        >
            <Box pos="absolute" top="0" bg={colorMode === "light" ? "gray.300":"gray.600"} 
            height={{base:"40px", sm:"50px", md:"50px", lg:"50px"}}  width="100%" borderTopRadius="18px" opacity="80%">
                <HStack pos="absolute"
                top={{base:"12px",sm:"15px", md:"15px",lg:"15px"}}
                left={{base:"21px",sm:"30px", md:"30px",lg:"30px"}}>
                <Circle bg="red" width={{base:"15px",sm:"20px", md:"20px",lg:"20px"}}
                 height={{base:"15px",sm:"20px", md:"20px",lg:"20px"}}></Circle>
                <Circle bg="orange" width={{base:"15px",sm:"20px", md:"20px",lg:"20px"}}
                 height={{base:"15px",sm:"20px", md:"20px",lg:"20px"}}></Circle>
                <Circle width={{base:"15px",sm:"20px", md:"20px",lg:"20px"}}
                height={{base:"15px",sm:"20px", md:"20px",lg:"20px"}} bg="green" ></Circle>
                </HStack>
            </Box>
            {children}

        </Box>
        <Footer/>
        </Flex>
    )
}

export async function getStaticProps() {
    res = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    resItem = await res.json()

    console.log(resItem)
    return ({
        props: {
            resItem
        }
    }

    )
}





export default Layout