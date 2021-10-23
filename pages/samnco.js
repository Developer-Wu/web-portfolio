import {
    Heading, Box, Button, NumberInput, FormControl, Input,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    RadioGroup,
    Radio,
    Flex,
    HStack,
    FormLabel
} from "@chakra-ui/react"
import { jsPDF } from "jspdf";
import { useState } from "react";
import DatePicker from "react-datepicker";


function SamnCo(props) {

    const months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    const nth = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    // Jan 31st 2022
    const [amount, setAmount] = useState(140000)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [option, setOption] = useState("1")
    const [numMonth, setNumMonths] = useState(3)

    function generatePDF(amount, startDate, endDate, numMonth) {
        const doc = new jsPDF();
        var newString = ""

        switch (option) {
            case "1":
                console.log('hello')
                console.log("1")
                newString = doc.splitTextToSize(`Dear Landlords of 38 Stanley Street,\n\nI am writing to you today during these trying times for my business to once again seek an extension to our temporary rent reduction arrangement keeping it at HKD ${amount} per month for an additional period of ${numMonth} months starting ${startDate} till ${endDate}. As you’re probably aware by now, COVID-19 crisis has continued to be extremely hard on my business and there has been many challenges from supply all the way to distribution and retail this year for small and big businesses everywhere including mine. It has honestly been one of the most difficult challenges we’ve faced since we opened more than 30 years ago yet we are determined more than ever to persevere and weather this storm. David has been a great support through it all, continually doing all he can to keep my business from folding and your continued generosity will go a long way in helping small businesses like mine survive and continue to prosper.\n\nOnce again, I thank you for your continued generosity throughout this dark chapter in my business.\n\nYours sincerely,\nEdward Wu`, 220)
                doc.setFontSize(12)
                doc.text(newString, 20, 90, {
                    align: 'left',
                    lineHeightFactor: 1.5

                })
                doc.save(`SamnCo-${startDate}-${endDate}.pdf`)

                return
            case "2":
                console.log("2")
                newString = doc.splitTextToSize(`Dear Landlords of 38 Stanley Street,\n\nI am writing to you today during a difficult time for my business to seek an extension to our temporary rent reduction arrangement keeping it at HKD ${amount} per month for an additional period of ${numMonth} months starting ${startDate} to ${endDate}. The global COVID 19 crisis has continued to bring on many unforeseen challenges on my business and your help will come a long way in helping keep my business afloat and alleviate the negative effects COVID 19 continues to have on my business whilst the situation persists.\n\nThank you for your continued support of my business throughout the years and for your consideration.\n\nYours sincerely,\nEdward Wu\nOwner of Sam & Company`, 220)
                doc.setFontSize(12)
                doc.text(newString, 20, 90, {
                    align: 'left',
                    lineHeightFactor: 1.5

                })
                doc.save(`SamnCo-${startDate}-${endDate}.pdf`)

                return
            case "3":
                console.log("3")
                newString = doc.splitTextToSize(`Dear Landlords of 38 Stanley Street, \n\nI am writing to you today during these trying times for my business to once again seek an extension to our temporary rent reduction arrangement keeping it at HKD ${amount} per month for an additional period of ${numMonth} months starting ${startDate} till ${endDate}. As you’re probably aware by now, COVID 19 crisis has continued to bring on many challenges for small and big businesses everywhere.It has honestly been one of the most difficult challenges we’ve faced since I opened more than 30 years ago.David has been a great support through it all, continually doing all he can to keep my business from folding and your continued generosity will go a long way in helping small businesses like mine survive.\n\nOnce again, I thank you for your continued generosity throughout this dark chapter in my business.\n\nYours sincerely, \nEdward Wu`, 220)
                doc.setFontSize(12)
                doc.text(newString, 20, 90, {
                    align: 'left',
                    lineHeightFactor: 1.5

                })
                doc.save(`SamnCo-${startDate}-${endDate}.pdf`)

                return
        }
        return



    }

    function handleSubmit(e) {
        e.preventDefault()
        const startDay = startDate.getDate() + nth(startDate.getDate())
        const startYear = startDate.getFullYear()
        const startMonth = months[startDate.getMonth()]
        const resStart = startMonth + " " + startDay + " " + startYear

        const endDay = endDate.getDate() + nth(endDate.getDate())
        const endYear = endDate.getFullYear()
        const endMonth = months[endDate.getMonth()]

        const resEnd = endMonth + " " + endDay + " " + endYear

        const resAmount = String(amount).replace(/(.)(?=( \d{3})+$)/g, '$1,') + ".00"

        generatePDF(resAmount, resStart, resEnd, numMonth)

    }
    return (
        <Box mt="100px">
            <form onSubmit={handleSubmit}>
                <Flex justifyContent="center">
                    <Flex flexDir="column" maxW="700px">
                        <Heading mb="30px" textAlign="center">LETTER GENERATOR</Heading>
                        <FormControl mb="30px" isRequired>
                            <FormLabel>Letter Option</FormLabel>
                            <RadioGroup value={option} onChange={(e) => setOption(e)}>
                                <HStack spacing="20px">
                                    <Radio value="1">Option 1</Radio>
                                    <Radio value="2">Option 2</Radio>
                                    <Radio value="3">Option 3</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                        <HStack mb="30px" spacing="30px">
                            <FormControl isRequired>
                                <FormLabel>Start</FormLabel>
                                <DatePicker selected={startDate}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    placeholderText="Select Date"
                                    dropdownMode="select"
                                    onChange={(e) => setStartDate(e)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>End</FormLabel>
                                <DatePicker selected={endDate}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    placeholderText="Select Date"
                                    dropdownMode="select"
                                    onChange={(e) => setEndDate(e)}
                                />
                            </FormControl>
                        </HStack>

                        <FormControl mb="30px" isRequired>
                            <FormLabel>Number of Months</FormLabel>
                            <NumberInput onChange={(e) => setNumMonths(e)} defaultValue={numMonth} step={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl mb="30px" isRequired>
                            <FormLabel>Rent Amount in HKD</FormLabel>
                            <NumberInput onChange={(e) => setAmount(e)} defaultValue={amount} precision={2} step={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    < NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <Button type="submit" value="Submit">
                            GENERATE
                        </Button>
                    </Flex>
                </Flex>
            </form>

        </Box>


    );
}

export default SamnCo;



