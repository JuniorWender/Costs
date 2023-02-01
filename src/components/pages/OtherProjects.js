import { Link } from 'react-router-dom';

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
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"
                    github="https://fontawesome.com/search"
                    figma="https://ui.dev/react-router-url-parameters"
                    />
                  <Card 
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"

                  />
                  <Card 
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"

                  />
                  <Card 
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"

                  />
                  <Card 
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"
                    github=""
                    figma=""
                  />
                  <Card 
                    title="teste"
                    src="mail"
                    alt="teste 3" 
                    description="teste 2"
                    github=""
                    figma=""
                  />
                </Container>
            </Container>
        </div>
    )
}

export default Company;