import {Thead,Table, Td, Tr, Tbody} from "@chakra-ui/react"
import { GiMailbox } from "react-icons/gi";
import { v4 as uuidv4 } from 'uuid';


function Help() {
    const cmds = [{
        key:uuidv4(),
        command:"--help",
        description:"list out all available commands"
    },{
        key:uuidv4(),
        command:"clear",
        description:"clear the console"
    },{
        key:uuidv4(),
        command:"navTo('<name-of-page>')",
        description:"Go to a certain page. home - '/' , about - '/about', portfolio - '/portfolio', contact- '/contact'"
    },{
        key:uuidv4(),
        command:"sendMail(\"fName\":<insert your first name in>,\"lName\":<insert your last name>, \"email\":<insert your email address>,\"reason\":<reason for contact> \"message\":<insert your message>)",
        description:"Send an email to me! Eg. sendMail(\"fName\":\"Dan\",\"lName\":\"Wu\", \"email\":\"developerdanwu@gmail.com\",\"reason\":\"Making a website!\"> \"message\":\"Hi there! I would like to make a website!\")"
    },
    {
        key:uuidv4(),
        command:"changeColorMode",
        description:"Changes the colorMode between light and dark mode"
    }
    ]

    return (
        {
            key:uuidv4(),
            value:<Table size="sm" variant="unstyled" width="auto">
            <Thead>
                <Tr>
                    <Td>Command</Td>
                    <Td>Description</Td>
                </Tr>
            </Thead>
            <Tbody>
                {cmds.map((row) => {
                    return (
                    <Tr key={row.key}>
                        <Td>{row.command}</Td>
                        <Td>{row.description}</Td>
                    </Tr>)
                })}
            </Tbody>
            </Table>
        }
    )
}

export {Help}

    