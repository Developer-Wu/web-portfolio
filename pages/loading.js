import { Box, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"

function Loader() {
    return (
        <Box px={{ base: "10px", sm: "10px", md: "0px", lg: "0px" }} display="flex" flexDir="row" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY={{ base: "", sm: "auto" }} width="100%" maxW="1250px" height="100%">
            <Text pl="20px">changing route...</Text>
        </Box>

    )

}

export default Loader

Loader.PageLayout = Layout