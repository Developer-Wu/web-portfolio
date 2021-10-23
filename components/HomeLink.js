import { ListItem, Link } from "@chakra-ui/react"
import Nextlink from "next/link"

function HomeLink(props) {
    return (
        <>
            <Nextlink href={props.link}>
                <Link style={{ textDecoration: "none" }} ><ListItem cursor="pointer"
                    id="about"
                    width="100%"
                    bg='none'
                    color='brand.main'
                    fontSize={{ base: "1.3em", sm: "1.3em", md: "1.6em", lg: "1.6em" }}
                    _hover={{
                        bg: 'brand.hover',
                        color: 'white'
                    }}>-&gt; {props.text}</ListItem></Link></Nextlink>
        </>
    )
}

export default HomeLink