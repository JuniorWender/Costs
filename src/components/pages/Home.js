import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home_Container}>
            <h1> Welcome to <span> Costs </span></h1>
            <p> Start To Manager Your Projects Now! </p>
            <LinkButton to="/NewProject" text="Create Project"/>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;