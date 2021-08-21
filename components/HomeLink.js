import {Link, ListItem} from "@chakra-ui/react"

function HomeLink(props) {
    return (
        <Link style = {{textDecoration:"none"}} href={props.link}><ListItem cursor="pointer" 
                    id="about" 
                    width="100%" 
                    bg='none' 
                    color='brand.main'
                    fontSize={{base:"1.3em", sm:"1.3em", md:"1.6em", lg:"1.6em"}} 
                    _hover={{
                        bg:'brand.hover',
                        color:'white'
                    }}>-&gt; {props.text}</ListItem></Link>
    )
}

export {HomeLink}