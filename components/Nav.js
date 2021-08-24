import {FaMoon} from "react-icons/fa"
import {Button, Box, useColorMode, HStack, List, VStack, Link } from "@chakra-ui/react"
import {GiHamburgerMenu} from "react-icons/gi"
import { useRef, useState, useEffect } from "react"
import Burger from "../components/Burger"
import { useRouter } from 'next/router'
import { ClassNames } from "@emotion/react"



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

    var size = useWindowSize().width;

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

    function handleMobileNav() {
        openMobileNav(!mobileNav)
    }

    return (
        <Box zIndex="999" display="flex" justifyContent="flex-end" flexDir="row" width="100%">
        {size > 640 ? <HStack display={{base:"none", sm:"flex", md:"flex", lg:"flex"}} mr={{base:"70px",md:"70px",lg:"0px"}} top="2vh" pos="relative" align="center" justify="flex-end" spacing="20px" width="100%" maxWidth="1250px">
        <Link onClick={(e) => navAway(e, '/')}>home</Link>
        <Link onClick={(e) => navAway(e, '/about')}>about</Link>
        <Link onClick={(e) => navAway(e, '/portfolio')}>portfolio</Link>
        <Link onClick={(e) => navAway(e, '/contact')}>contact</Link>
                <Link onClick={(e) => navAway(e, '/testimonials')}>testimonials</Link>
        <Link onClick={(e) => navAway(e, '/terminal')}>terminal</Link>
    </HStack> : <Burger/>}
    </Box>

    )
}

export default Nav