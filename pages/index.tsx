import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import WhoIAm from 'components/whoiam';
import WhatDoIknow from 'components/knowledge';
import Projects from 'components/projects';
import { useState } from 'react';

//ChakraUI
import { Container, Flex, VStack } from '@chakra-ui/react';



export default function Home()  {
  const [showWhoIAm, setShowWhoIAm] = useState(true); 
  const [showWhatIknow, setShowWhatIknow] = useState({
    isHidden:true,
    display:'none',
  });
  const [showProyect, setShowProject] = useState({
    isHidden:true,
    display:'none',
  });

  const handleClick = (e:any, button:string) => {
    e.preventDefault()
    console.log(button)
    switch(button){
      case "whoIAm":
        showWhoIAm ? setShowWhoIAm(false) : setShowWhoIAm(true);
        break;
      case "WhatIKnow":
        showWhatIknow.isHidden ? setShowWhatIknow({
            isHidden: false, display:'flex'
          }) : setShowWhatIknow({
            isHidden:true, display:'none'
        });
        break;
      case "Proyect":
        showProyect.isHidden ? setShowProject({
          isHidden: false, display:'flex'
          }) : setShowProject({
            isHidden:true, display:'none'
        });

    }
    
  }
  return (
    <>
      <Head>
        <title>David Rosario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar></Navbar> */}
      <main>
       
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}




