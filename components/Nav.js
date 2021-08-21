import {FaMoon} from "react-icons/fa"
import {Button, Box, useColorMode, HStack, List, VStack, Link } from "@chakra-ui/react"
import {GiHamburgerMenu} from "react-icons/gi"
import { useRef, useState } from "react"
import Burger from "../components/Burger"



function Nav(props) {
    const navRef = useRef()
    const { colorMode, toggleColorMode } = useColorMode()
    const [mobileNav, openMobileNav] = useState(true)



    function handleMobileNav() {
        openMobileNav(!mobileNav)
    }

    return (
        <>
        
        <HStack display={{base:"none", sm:"flex", md:"flex", lg:"flex"}} mr={{base:"100px",md:"100px",lg:"0px"}} top="20px" pos="fixed" align="center" justify="flex-end" spacing="20px" width="100%" maxWidth="1250px">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/portfolio">portfolio</Link>
        <Link href="/contact">contact</Link>
        <Link href="/terminal">terminal</Link>
    <Button onClick={toggleColorMode}><FaMoon/></Button>
    </HStack>
    
    <Box display={{base:"block", sm:"none", md:"none", lg:"none"}}>
    <Burger/>
    </Box>

    
    
    <Button display={{base:"flex", sm:"none", md:"none", lg:"none"}} pos="fixed" top="20px" right="30px" onClick={toggleColorMode}><FaMoon/></Button>
 
    </>

    )
}

export default Nav