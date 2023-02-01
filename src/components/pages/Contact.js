import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API  from '../../config.json';

import Container from './../layout/Container';
import Input from './../form/Input';
import SubmitButton from '../form/SubmitButton';
import TextArea from '../form/TextArea';

import styles from '../project/ProjectForm.module.css'

function Contact() {

    const [mail, setMail] = useState('')

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault()

        fetch(API.url.form, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "Nome": mail.name,
                "E-mail": mail.email,
                "Mensagem": mail.message,

                /* FORMSUBMIT CONFIGURATION */
                "_subject": `${mail.subject}`,
                "_template": "table"
            })
        })
        
        navigate('../MailSend')
    }

    function handleChange(e) {
        setMail({ ...mail, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Container customClass="column"> 
                <h1>Contact Me</h1>
                <form onSubmit={submit} className={styles.form}> 
                    <Input                 
                        type="text" 
                        placeholder="Your Name"
                        text="Full Name"
                        name="name"
                        required={true}
                        handleOnChange={handleChange}
                    />
                    <Input                 
                        type="email" 
                        placeholder="test@email.com"
                        text="Email"
                        name="email"
                        required={true}
                        handleOnChange={handleChange}
                    />
                    <Input                 
                        type="text" 
                        placeholder="Enter With Your Subject"
                        text="Subject"
                        name="subject"
                        required={true}
                        handleOnChange={handleChange}
                    />
                    <TextArea
                        name="message"
                        text="Message"
                        row={8}
                        cols={5}
                        placeholder="Write Your Message Here"
                        required={true}
                        handleOnChange={handleChange}
                    />
                    <SubmitButton text="Send"/>
                </form>
            </Container>
        </div>
    )
}

export default Contact;