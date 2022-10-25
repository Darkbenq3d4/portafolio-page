import styles from 'styles/footer.module.css';
import { Box, Img, Flex } from '@chakra-ui/react'

export default function footer () {
    return(
        <Box className={styles.footer}>
          Done with {'\u2764'} and&nbsp;
          <Img src="/Frontend/react-icon.jpg" alt="React icon" maxHeight="25px"/>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          , powered by{' '} <Img maxH="16px" src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Box>
    )
}