import styles from 'styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import  projectsJSON from 'json/projects.json';

type project_object = {
    id: number,
    Title: string,
    Description: string,
    Technologies: string,
    Github:string
  }
  

export default function projects(
    props:{
        isHidden:boolean,
        display:string,
    }
    )
{
    return(
        <Container hidden={props.isHidden}>
            {
                projectsJSON.map((items) => (
                    <Row style={{display: props.display}}>
                <Col>
                <div className={styles.card} hidden={props.isHidden}>
                    <h2>{items.Title}</h2>
                    <p>{items.Description}</p>
                    <a href={items.Github}><h4>Github Page</h4></a>
                    <h4>Technologies Used</h4>
                    <ul>
                        {items.Technologies.map((techs) => (
                            <li>{techs}</li>
                        ))}
                    </ul>
                </div>
                </Col>
            </Row>
                ))
            }
        </Container>
    )
}



/*  */