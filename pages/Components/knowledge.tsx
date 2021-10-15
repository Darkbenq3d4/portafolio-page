import Image from 'next/image'
import  Carousel  from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import angular_logo from 'public/Frontend/angular-icon.svg';
import react_js from 'public/Frontend/reactjs-icon.svg';
import bootstrap from 'public/Frontend/bootstrap-4.svg';
import styles from 'styles/Home.module.css'

export default function WhatDoIknow(
    props:{
      isHidden:boolean
      display:string,
    }
  )
  { 
  return(
    <Container>
      <Row style={{display: props.display}}>
        <Col>
          <div className={styles.card} hidden={props.isHidden}>
            <h2>Frontend Developer</h2>
            <p>I like to design and code thing from scratch, so i have more liberty while bringing my ideas on the browser.</p>
            <h3>This is what I know:</h3>
          <Carousel indicators={false}>
            <Carousel.Item>
              <Image src={angular_logo} alt="Angular Framework" width={500} height={500}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={react_js} alt="React JS Framework" width={500} height={500}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={bootstrap} alt="Bootstrap CSS Framework" width={500} height={500}/>
            </Carousel.Item>
          </Carousel>
          </div>
        </Col>
        <Col>
          <div className={styles.card} hidden={props.isHidden}>
            <h2>Backend</h2>
            <p>A cute webpage is not all you need to be succesfull, you also need a functional website. I&apos;m someone capable </p>  
          </div>
        </Col>
      </Row>
    </Container>
  )
}