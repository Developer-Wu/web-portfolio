import { slide as Menu } from 'react-burger-menu'
import {Button, Link} from "@chakra-ui/react"
import { useRouter } from 'next/router'
import ClientLink from "next/link"
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"

function Burger(props) {
    const router = useRouter()

    const [menuState, toggleMenuState] = useState(false)

    var isMenuOpen = function(state) {
        toggleMenuState(state.isOpen)
        return state.isOpen;
      };


    function navAway(e, path) {
        e.preventDefault()
        toggleMenuState(!menuState)
        router.push(path)
        

        return 
    }


    return (
        <>
        <Menu isOpen={menuState} onStateChange={isMenuOpen} customBurgerIcon={<GiHamburgerMenu/>} left >
             <Link onClick={(e) => navAway(e, '/')} pl="10px" py="3px" className="menu-item" mb="20px" _hover={{
            backgroundColor:"brand.hover"
        }}>home</Link>
        <Link onClick={(e) => navAway(e, '/about')} pl="10px" py="3px" className="menu-item" mb="20px" _hover={{
            backgroundColor:"brand.hover"
        }}>about</Link>
        <Link onClick={(e) => navAway(e, '/portfolio')} pl="10px" py="3px" className="menu-item" mb="20px" _hover={{
            backgroundColor:"brand.hover"
        }}>portfolio</Link>
        <Link onClick={(e) => navAway(e, '/contact')} pl="10px" py="3px" className="menu-item" mb="20px" _hover={{
            backgroundColor:"brand.hover"
        }}>contact</Link>
                <Link onClick={(e) => navAway(e, '/testimonials')} pl="10px" py="3px" mb="20px" className="menu-item"  _hover={{
            backgroundColor:"brand.hover"
        }}>testimonials</Link>
        <Link onClick={(e) => navAway(e, '/terminal')} pl="10px" py="3px" mb="20px" className="menu-item"  _hover={{
            backgroundColor:"brand.hover"
        }}>terminal</Link>
        </Menu>
        </>
    )
}

export default Burger