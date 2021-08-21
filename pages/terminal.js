import {Table, Thead, Tr, Td, Tbody, VStack, Box, Input} from "@chakra-ui/react"
import {useState,useEffect, useRef} from "react"
import {TerminalWelcome} from "../components/TerminalWelcome"
import {Help} from "../components/HelpCommand"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router'
import {useColorMode} from '@chakra-ui/react'

function Terminal() {
    const router = useRouter();

    const {colorMode,toggleColorMode} = useColorMode()

    const [cmd, updateCmd ] = useState("")

    function onUserInput(event) {
        const newInput = event.target.value
        updateCmd(newInput)
    }
   const command = {
       key:uuidv4(),
       value:`> ${cmd}`
   }

   function redirect(page) {
       return (
           {
            key:uuidv4(),
            value:`> redirecting to ${page} page...`
           }
       )
   }

   function colorModeChange() {
       if (colorMode === "dark") {
        return(
            {
                key:uuidv4(),
                value:`changing color mode to light mode...`
               }
        )
       } else {
        return(
            {
                key:uuidv4(),
                value:`changing color mode to dark mode...`
               }
        )
       }

       } 


   const cmdNotFound = {
       key:uuidv4(),
       value:`command '${cmd}' not found. Type --help to see all available commands`
   }

   const sendEmailError = {
       key:uuidv4(),
       value:`Please check your sendMail command, you may have made a typo!`
   }

   const mailApiError = {
       key:uuidv4(),
       value:'an error occurred with the mail API. Please contact me via Instagram or Whatsapp. Thanks!'
   }

   const sendSuccess = {
       key:uuidv4(),
       value:'Your message has been successfully sent! A confirmation email will be sent soon to you!'
   }
   
    const [cmdOutput, updateOutPut] = useState([])

   function clearCmd() {
    updateOutPut([])
    updateCmd('')
   }

   function helpCmd() {
    updateOutPut(prevValues => [...prevValues, Help() ])
   }

    function onEnterPressed(event) {
        
        const keyPressed = event.key
        if (keyPressed == "Enter") {
            updateOutPut(prevValues => [...prevValues, command])
            console.log(cmd)
            if (cmd == "clear") {
                clearCmd()
            } else if (cmd == "--help"){
                console.log("hello")
                helpCmd()
            } else if (cmd == "navTo('/about')") {
                updateOutPut(prevValues => [...prevValues, redirect('about')])
                router.push('/about')
            } else if (cmd == "navTo('/')") {
                updateOutPut(prevValues => [...prevValues, redirect('home')])
                router.push('/')
            } else if (cmd.includes('sendMail')) {
                try {
                    var email = cmd.replace('sendMail',"").replace('(','{').replace(')','}')
                    var message = JSON.parse(email)
                    console.log(message)
                    fetch('api/contact', {
                        method: 'POST',
                        headers:{
                            'Accept':'application/json, text/plain, */*',
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(message)
                    }).then((res) => {
                        console.log('res received')
                        if (res.status === 200) {
                            updateOutPut(prevValues => [...prevValues, sendSuccess])
                        } else {
                            updateOutPut(prevValues => [...prevValues, mailApiError])
                        }
                    })

                } catch {
                    updateOutPut(prevValues => [...prevValues, sendEmailError])
                }



            } else if (cmd === 'changeColorMode'){
                toggleColorMode()
                updateOutPut(prevValues => [...prevValues, colorModeChange()])
            }
            else {
                updateOutPut(prevValues => [...prevValues, cmdNotFound])
            }
            updateCmd('')
        }
    }

    return (

        <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="flex-start"  marginTop="60px" borderBottom="20px" overflowY="auto" width="98%" maxW="1250px" height="100%">
        <VStack alignItems="flex-start">
        <Box>
        <TerminalWelcome />
        {cmdOutput.map((item) => {
            return (
                <div key={item.key}>{item.value}</div>
            )
        })}
        <Input placeholder="Type a cmd here..." value={cmd} onKeyPress={onEnterPressed} onChange={onUserInput}></Input>
        </Box>
        </VStack>
        </Box>
    )
}

export default Terminal