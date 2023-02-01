import { Link } from 'react-router-dom';

import url  from '../assets/url.json';

import Container from "../layout/Container";
import Card from '../layout/Card';

import styles from './OtherProjects.module.css'

function Company() {
    return (
        <div>
            <h1>Other Projects</h1>
            <Container customClass="column">
                <section className={styles.explain}>
                    <div>It's a Study Project Using React.Js And My <span>First Project</span> With This Language. So If You Find a Some Bug, Please <Link to="../Contact" className={styles.link}> Contact Me </Link>.</div>
                    <div>You Can Check My Github And LinkedIn For More Details About Me.</div>
                </section>
                <Container customClass="otherProjects">
                  <Card 
                    title="Portfolio"
                    src="portfolio"
                    imgStyle={{"width":"300px","height":""}}
                    alt="Portfolio Website" 
                    description="This is My Portfolio version 1.0"
                    link={url.link.portifolio}
                    github={url.github.portifolio}
                    figma={url.figma.portifolio}
                    />
                  <Card 
                    title="Secret Number"
                    src="secretNumber"
                    imgStyle={{"width":"300px","height":""}}
                    alt="Secret Number Start Page" 
                    description="This is a Game created with Js and Html" 
                    link={url.link.secretNumber}
                    github={url.github.secretNumber}
                  />
                  <Card 
                    title="Automatic SQL Gen"
                    src="sql"
                    imgStyle={{"width":"150px","height":""}}
                    alt="DataBase Icon" 
                    description="Translate a column and create a SQL"
                    link={url.github.translate}
                  />
                </Container>
            </Container>
        </div>
    )
}

export default Company;