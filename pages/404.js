import {Heading, Flex, Box, Button,Spacer, Link} from "@chakra-ui/react"
import Typed from "typed.js";
import {useRef, useState, useEffect} from "react"
function ErrorPage() {


const ErrorMessage = () => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
            '404 <br> page not found'
      ],
      typeSpeed: 80,
      backSpeed: 70,
      smartBackspace:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <span ref={el} />

  );
}
    return (
        <Box alignItems="center" height="800px" justifyContent="center" px={{base:"10px", sm:"10px", md:"0px", lg:"0px"}} display="flex" flexDir="column"  borderBottom="20px" overflowY="auto" width="98%" maxW="1250px" >
                <Spacer/>
                <Heading fontSize={{base:"2.5em",sm:"3em",md:"4.5em",lg:"4.5em"}} textAlign="center">
                <ErrorMessage/>
                    </Heading>
                <Spacer/>
                <Button size="lg"><Link href="/">Return Home</Link></Button>
                <Spacer/>
        </Box>
    )
}

export default ErrorPage