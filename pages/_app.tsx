import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/themes';
import '@fontsource/rancho'
import '@fontsource/raleway'
import '@fontsource/maitree'
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      <SpeedInsights/>
    </ChakraProvider>
  )
}
export default MyApp
