import { FaPaperPlane, } from 'react-icons/fa';

import styles from './MailSend.module.css'

function MailSend() {
    
    return (
        <div className={styles.box}>
            <FaPaperPlane />
            <h1> Success </h1>
        </div>
    )
}

export default MailSend;