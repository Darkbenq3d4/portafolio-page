import style from 'styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function whoIAm(
    props:{
        isHidden:boolean,
    }
    )
{
    return(
        <Container hidden={props.isHidden}>
            <Row>
                <Col>
                    <h1>My name is David Rosario</h1>
                    <p>I&apos;m a dominican developer with experience in frontend and backend development and mobile apps design.<br/> 
                        I specialize in web development, yet this is only one of my milestones as I still see and learn new frameworks every now and then. My objectives are simple
                        and I always want my clients to have amazing products with great design and amazing performance. </p>
                    <button>Interested? Let&apos;t talk! </button>
                </Col>
            </Row>
        </Container>
    )
}