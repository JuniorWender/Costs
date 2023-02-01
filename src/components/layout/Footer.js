import styles from './Footer.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer(props){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://github.com/JuniorWender"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/jorgewenderjunior/"><FaLinkedin/></a></li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer