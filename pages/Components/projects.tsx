import styles from 'styles/projects.module.css';
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
            <Row style={{display: props.display}}>
                {
                projectsJSON.map((items, index) => (
                <Col key={index}>
                    <div className={styles.card} hidden={props.isHidden}>
                        <h2>{items.Title}</h2>
                        <p>{items.Description}</p>
                        <a href={items.Github}><h4 className={styles.github}>Github Page</h4></a>
                        <h4>Technologies Used</h4>
                        <ul>
                            {items.Technologies.map((techs, index) => (
                                <li key={index}>
                                    {techs}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                ))
            }
            </Row>
        </Container>
    )
}



/*  */