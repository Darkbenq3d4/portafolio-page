import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/themes';
import '@fontsource/rancho'
import '@fontsource/raleway'
import Navbar from 'components/Navbar/navbar';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
