import { Image } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Slideshow(
    props:{
        imagesArray: string[]
}) {
const [imageKey, setImageKey] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImageKey((Key) => Key + 1);
            if(imageKey == props.imagesArray.length - 1) setImageKey(0);      
        }, 5000);
        return () => clearInterval(interval);
    })
 return(
    <AnimatePresence exitBeforeEnter>
    <motion.div
     initial={{opacity:0}}
     animate={{
        opacity:1,
        transition: {
            duration: 0.5
        }
     }}
     exit={{opacity:0}}
     key={imageKey}>
        <Image
        alt="Stock"
        boxSize={200}
        src={props.imagesArray[imageKey]} 
        />
    </motion.div>
</AnimatePresence>
 )
}