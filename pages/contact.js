
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
    import {useEffect, useState} from "react"
    import {date} from "../components/Date"

function Contact(props) {


    useEffect(() => {
    var asciiElement = document.querySelector('pre');
    console.log(asciiElement)
    var art = new AsciiMorph(asciiElement, {x:0,y:0});

    var asciis = [[
        "                _ooOoo_",
        "               o8888888o",
        "               88\" . \"88",
        "               (| -_- |)",
        "               O\\  =  /O",
        "            ____/`---'\\____",
        "          .'  \\\\|     |//  `.",
        "         /  \\\\|||  :  |||//  \\",
        "        /  _||||| -:- |||||_  \\",
        "        |   | \\\\\\  -  /'| |   |",
        "        | \\_|  `\\`---'//  |_/ |",
        "        \\  .-\\__ `-. -'__/-.  /",
        "      ___`. .'  /--.--\\  `. .'___",
        "   .\"\" '<  `.___\\_<|>_/___.' _> \\\"\".",
        "  | | :  `- \\`. ;`. _/; .'/ /  .' ; |",
        "  \\  \\ `-.   \\_\\_`. _.'_/_/  -' _.' /",
        "===`-.`___`-.__\\ \\___  /__.-'_.'_.-'===",
        "                `=--=-'    "
        ],
        
        [
        "                             /",
        "                            /",
        "                           /;",
        "                          //",
        "                         ;/",
        "                       ,//",
        "                   _,-' ;_,,",
        "                _,'-_  ;|,'",
        "            _,-'_,..--. |",
        "    ___   .'-'_)'  ) _)\\|      ___",
        "  ,'\"\"\"`'' _  )   ) _)  ''--'''_,-'",
        "-={-o-  /|    )  _)  ) ; '_,--''",
        "  \\ -' ,`.  ) .)  _)_,''|",
        "   `.\"(   `------''     /",
        "     `.\\             _,'",
        "       `-.____....-\\\\",
        "                 || \\\\",
        "                 // ||",
        "                //  ||",
        "            _-.//_ _||_,",
        "              ,'  ,-'/"
        ],
        
        [
        "      _nnnn_                      ",
        "     dGGGGMMb     ,\"\"\"\"\"\"\"\"\"\"\"\"\"\".",
        "    @p~qp~~qMb    | Linux Rules! |",
        "    M|@||@) M|   _;..............'",
        "    @,----.JM| -'",
        "    JS^\__/  qKL",
        "    dZP        qKRb",
        "    dZP          qKKb",
        "fZP            SMMb",
        "HZM            MMMM",
        "FqM            MMMM",
        "__| \".        |\\dS\"qML",
        "|    `.       | `' \Zq",
        "_)      \.___.,|     .'",
        "\____   )MMMMMM|   .'",
        "    `-'       `--' hjm",
        ],
        
        [
        "              ,==;,",
        "              )a,a\\g",
        "              \\=_/8",
        "              _| (_3,",
        "          /(__/\\]\\",
        "          (_,,__) \\",
        "          //\  ;/  \\ ",
        "          //  )__\   \|_",
        "      _'/  |[]__L,  ,>}",
        "      /t}  / ,   [| ",
        "      6    /-.|=._|/",
        "          /  .'`-/`",
        "          ( .' | /",
        "          \\ |  ( |",
        "          \\_)  \_).",
        "          \\ \\  \\ |",
        "          \\ >  >|",
        "      snd /.'  / /",
        "              '-'",
        ],
        
        [
        "    ___,___,_______,____",
        "    |  :::|///./||'||    \\",
        "    |  :::|//.//|| || H)  |",
        "    |  :::|/.///|!!!|     |",
        "    |   _______________   |",
        "    |  |:::::::::::::::|  |",
        "    |  |_______________|  |",
        "    |  |_______________|  |",
        "    |  |_______________|  |",
        "    |  |_______________|  |",
        "    ||_|     boba      ||_|",
        "    |__|_______________|__|"
         ],
         [
        "   .__________________________.",
        "   | .___________________. |==|",
        "   | |     Apple ][      | |  |",
        "   | |                   | |  |",
        "   | |                   | |  |",
        "   | |                   | |  |",
        "   | |                   | |  |",
        "   | |                   | |  |",
        "   | | ]                 | | ,|",
        "   | !___________________! |(c|",
        "   !_______________________!__!",
        "   |    ___ -=      ___ -= | ,|",
        "   | ---[_]---   ---[_]--- |(c|",
        "                               ", 
        "    !_______________________!__!",
        "   /                            \\",
        "  /  [][][][][][][][][][][][][]  \\ ",
        " /  [][][][][][][][][][][][][][]  \\ ",
        "(  [][][][][____________][][][][]  )",
        " \\ ------------------------------ / ",
        "  \\______________________________/  "
         ]];

    art.render(asciis[5]);

    var currentIndex = 2;

    setTimeout(function() {
        art.morph(asciis[1]);
    }, 1000);

    setInterval(function() {
    art.morph(asciis[currentIndex]);
    currentIndex++;
    currentIndex%= asciis.length;
    }, 3000);

    })

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
                <FormControl justifyContent="space-between" minH="500px" display="flex" flexDir="column" isRequired width="100%" maxW={{base:"", sm:"", md:"500px", lg:"500px"}}>
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
                    <Button type="submit" onClick={handleFormSubmit}>SEND MAIL</Button>
                </FormControl>
                {submitted ? <Alert status="success">
                <AlertIcon />
                <AlertTitle mr={2}>Message Sent!</AlertTitle>
                <AlertDescription>I will attempt to reply as soon as possible!</AlertDescription>
                <CloseButton onClick={() => setSubmitted(false)} position="absolute" right="8px" top="8px" />
                </Alert>:<></> }

                <Text minW="300px" display={{base:"none",sm:"none", md:"inline", lg:"inline"}} pt="20px" minH="500px" mr="5%" className="ascii-element" fontFamily="'Courier New', Courier, monospace;" as="pre"></Text>

                </Flex>
                
                
            </VStack>     
        </Box>
        <script type="text/javascript" src="/scripts/asciiArt.js">HELLO</script>
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