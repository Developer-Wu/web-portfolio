import { slide as Menu } from 'react-burger-menu'
import {Link, Button} from "@chakra-ui/react"
import {GiHamburgerMenu} from "react-icons/gi"

function Burger() {

    function openNav(e) {
        e.preventDefault();
    }

    return (
        <>
        <Menu customBurgerIcon={<GiHamburgerMenu/>} left >
             <Link pl="10px" py="3px" className="menu-item" mb="20px" _hover={{
            backgroundColor:"brand.hover"
        }} href="/">home</Link>
        <Link pl="10px" py="3px" mb="20px" className="menu-item"  _hover={{
            backgroundColor:"brand.hover"
        }} href="/about">about</Link>
        <Link pl="10px" py="3px" mb="20px" className="menu-item"   _hover={{
            backgroundColor:"brand.hover"
        }} href="/portfolio">portfolio</Link>
        <Link pl="10px" py="3px" mb="20px" className="menu-item" _hover={{
            backgroundColor:"brand.hover"
        }}>contact</Link>
        <Link pl="10px" py="3px" mb="20px" className="menu-item"  _hover={{
            backgroundColor:"brand.hover"
        }} href="/terminal">terminal</Link>
        </Menu>
        </>
    )
}

export default Burger