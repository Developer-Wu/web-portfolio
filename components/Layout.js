import Nav from "../components/Nav"
import { Footer } from "../components/Footer"
import { 
    HStack, 
    Box, 
    Circle, 
    Text,
    Flex,
    Spacer,
VStack, useColorModeValue, useColorMode} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import {HomeContent} from "../components/HomeContent"





function Layout({children}, props) {

    const {colorMode, toggleColorMode}  = useColorMode()

    const size = useWindowSize().width;

    // Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


    return (
        <Flex alignItems={{base:"flex-start",sm:"center"}} justifyContent={{base:"flex-start",sm:"center"}} height={{base:"100%", sm:"100vh"}} flexDir="column">

        <Flex height={{base:"100%", sm:"100vh", md:"100vh", lg:"100vh"}} justifyContent="space-around" alignItems="center" flexDir="column" px={{base:"13px", sm:"20px", md:"20px", lg:"20px"}}  justify="center" width="100%" maxW="1250px" maxH={{base:"",sm:"1000px"}}>
        <Nav/>
        {size <540 ? null :<Spacer/>}

        {size >= 640 ? <Box ml="20px" mr="20px"
        overflowY="hidden"
        zIndex="5"
        whiteSpace="normal"
        pos="relative"
        borderRadius="20px"
        border="2px solid gray"
        width="100%" 
        height="80%"
        maxHeight="1000px"
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
        </Box>: <Box pt="20px" pb="120px" height="100%">{children}</Box>}
        <Spacer/>
        <Footer/>
        </Flex>

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