import { Button, Link, VStack, Text, Box, UnorderedList, ListItem, Grid, Heading, textDecoration, Flex, Spacer, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { JobTitle } from "./JobTitle"
import HomeLink from "../components/HomeLink"
import { date } from "../components/Date"


function HomeContent(props) {

    return (
        <Box px={{ base: "10px", sm: "10px", md: "0px", lg: "0px" }} display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY={{ base: "", sm: "auto" }} width="98%" maxW="1250px" height="100%">

            <Flex minH={{ base: "600px", sm: "600px", md: "600px", lg: "600px" }} justifyContent="space-around" flexDir="column" overflowX="clip" width="98%" >
                <Text>Last login: {date} at IP {props.ipItem.query} from {props.ipItem.country}</Text>
                <Spacer />
                <Heading fontSize={{ base: "1.7em", sm: "2em", md: "2.3em", lg: "2.3em" }}><JobTitle /></Heading>
                <Spacer />
                <UnorderedList display="flex" flexDir="column" justifyContent="space-between" listStyleType="none" maxW="1250px" width="100%">
                    <HomeLink link="/about" text="about" />
                    <HomeLink link="/portfolio" text="portfolio" />
                    <HomeLink link="/contact" text="contact" />
                    <HomeLink link="/testimonials" text="testimonials" />
                </UnorderedList>
                <Spacer />
                <Flex>
                    <Text>***Want to see what it feels like to be a cool developer?<br /> try navigating the site using the in-built terminal (Works best on Desktop)***</Text>
                </Flex>


            </Flex>


        </Box>


    )

}

export { HomeContent }