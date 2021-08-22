
import { Code, 
    Image, 
    ListItem, 
    Link, 
    Flex,
    UnorderedList, 
    Heading,
    HStack, 
    Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton,Text, VStack, Box, Button, FormControl, FormLabel, Input, FormHelperText, Textarea, Select} from "@chakra-ui/react"
import AsciiMorph from "@kelleyvanevert/ascii-morph"
    import {date} from "../components/Date"
    import {RenderAscii} from "../components/Ascii"
    import {useEffect, useState} from "react"
import { GiBrandyBottle } from "react-icons/gi"


function Contact(props) {


   

    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [reason, setReason] = useState('')
    const [submitted, setSubmitted] = useState(false)


    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('CLICKED')

        let data = {
            fName,
            lName,
            email,
            message,
            reason
        }
        fetch('/api/contact', {
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('res received')
            if (res.status === 200) {
                console.log('Resoponse Succeeded!')
                setSubmitted(true)
                setfName('')
                setlName('')
                setEmail('')
                setMessage('')
                setReason('')

            }
        })
    }



    return (
        <>
        <Box  pb={{base:"20px", md:"20px", lg:"20px"}} pl={{base:"5px", md:"0px", lg:"0px"}} pr={{base:"5px", md:"0px", lg:"0px"}} display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start" marginTop="60px" borderBottom="20px" overflowY="auto" width="98%" maxW="1250px" height="100%">
            <VStack  px="5px" alignItems="flex-start" width="100%" spacing="25px">
            <Text>Last login: {date} at public IP {props.ipItem.query} from {props.ipItem.country}</Text>
            <Heading>contact me</Heading>
                <Flex flexDir={{base:"column", sm:"column", md:"row", lg:"row"}} width="100%" alignItems={{base:"flex-start",sm:"flex-start",md:"center", lg:"center"}} minH="500px" justifyContent="space-between">
                <FormControl justifyContent="space-between" minH="550px" display="flex" flexDir="column" isRequired width="100%" maxW={{base:"", sm:"", md:"550px", lg:"550px"}}>
                <FormLabel>First Name</FormLabel>
                    <Input value={fName} onChange={(e)=>{setfName(e.target.value)}} name="f_name" type="text"/>
                    <FormLabel>Last Name</FormLabel>
                    <Input value={lName} onChange={(e)=>setlName(e.target.value)} name="l_name" type="text"/>
                    <FormLabel>Email</FormLabel>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email"/>
                    <FormLabel>Reason</FormLabel>
                    <Select value={reason} onChange={(e)=>{setReason(e.target.value)}} name="reason" placeholder="--select reason--">
                    <option value="Website Development Inquiry">Website Development Inquiry</option>
                    <option value="Other Job Opportunity">Other Job Opportunity</option>
                    <option value="Other">Other</option>
                    <option value="Collaboration Opportunity">Collaboration Opportunity</option>
                    </Select>
                    <FormLabel>Message</FormLabel>
                    <Textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message"/>
                    <Button _hover={{color:"#FFF", bgColor:"brand.hover", borderColor:"brand.hover"}} color="brand.main" border="2px" borderColor="brand.main" type="submit" onClick={handleFormSubmit}>SEND MAIL</Button>
                    {submitted ? <Alert status="success" alignItems="center">
                <AlertIcon />
                <AlertTitle mr={2}>Message Sent!</AlertTitle>
                <AlertDescription>I will attempt to reply as soon as possible!</AlertDescription>
                <CloseButton alignSelf="flex-start" onClick={() => setSubmitted(false)}/>
                </Alert>:<></> }
                </FormControl>
                
                <RenderAscii/>

                </Flex>
                
                
            </VStack>     
        </Box>
        </>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const resip = await fetch('http://ip-api.com/json/?fields=status,message,country,city,timezone,query')
    const ipItem = await resip.json()

  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
   
    return {
      props: {
          ipItem,
      },
    }
  }

export default Contact