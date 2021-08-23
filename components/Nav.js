import {FaMoon} from "react-icons/fa"
import {Button, Box, useColorMode, HStack, List, VStack, Link } from "@chakra-ui/react"
import {GiHamburgerMenu} from "react-icons/gi"
import { useRef, useState } from "react"
import Burger from "../components/Burger"
import { useRouter } from 'next/router'



function Nav(props) {

    const { colorMode, toggleColorMode } = useColorMode()
    const [mobileNav, openMobileNav] = useState(true)

    const router = useRouter()

    const [menuState, toggleMenuState] = useState(false)

    var isMenuOpen = function(state) {
        toggleMenuState(state.isOpen)
        return state.isOpen;
      };

      console.log(menuState)
    function navAway(e, path) {
        e.preventDefault()
        toggleMenuState(!menuState)
        router.push(path)
        

        return 
    }




    function handleMobileNav() {
        openMobileNav(!mobileNav)
    }

    return (
        <>
        
        <HStack display={{base:"none", sm:"flex", md:"flex", lg:"flex"}} mr={{base:"70px",md:"70px",lg:"0px"}} top="20px" pos="fixed" align="center" justify="flex-end" spacing="20px" width="100%" maxWidth="1250px">
        <Link onClick={(e) => navAway(e, '/')}>home</Link>
        <Link onClick={(e) => navAway(e, '/about')}>about</Link>
        <Link onClick={(e) => navAway(e, '/portfolio')}>portfolio</Link>
        <Link onClick={(e) => navAway(e, '/contact')}>contact</Link>
                <Link onClick={(e) => navAway(e, '/testimonials')}>testimonials</Link>
        <Link onClick={(e) => navAway(e, '/terminal')}>terminal</Link>
    <Button onClick={toggleColorMode}><FaMoon/></Button>
    </HStack>
    <Box display={{base:"block", sm:"none", md:"none", lg:"none"}}>
    <Burger/>
    </Box>

    
    
    {/* <Button display={{base:"flex", sm:"none", md:"none", lg:"none"}} pos="fixed" top="20px" right="30px" onClick={toggleColorMode}><FaMoon/></Button> */}
 
    </>

    )
}

export default Nav