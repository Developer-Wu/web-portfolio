import "@fontsource/source-code-pro"
import { extendTheme} from "@chakra-ui/react";
import { mode, createBreakpoints  } from '@chakra-ui/theme-tools';

const fonts = {
    heading: "Source Code Pro",
    body:"Source Code Pro",
  }

  const breakpoints = createBreakpoints({
    base: "0px",
    sm: "40em",
    md: "62em",
    lg: "1300px",
    xl: "80em",
  })
  

const colors = {
  brand: {
    main: "#41FF00",
    hover:"#0000FF"
  }
};

const styles = {
    global: props => ({
      body: {
        color: mode('#000', '#41FF00')(props),
        bg: mode('gray.100', '#000')(props),
      },
    }),
  };

  const theme = extendTheme({
    styles,
    fonts,
    colors,
    breakpoints
  });
  
  export default theme;