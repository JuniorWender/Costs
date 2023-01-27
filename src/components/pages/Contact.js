import Container from './../layout/Container';
import Input from './../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'
import TextArea from '../form/TextArea';

function Contact() {

    function submit(e) {
        e.preventDefault()
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
                    />
                    <Input                 
                        type="email" 
                        placeholder="test@email.com"
                        text="Your Email"
                    />
                    <Input                 
                        type="text" 
                        placeholder="Enter With Your Subject"
                        text="Subject"
                    />
                    <TextArea
                        name="message"
                        text="Your Message"
                        row={8}
                        cols={5}
                        placeholder="Write Your Message Here"
                    />
                    <SubmitButton text="Send"/>
                </form>
            </Container>
        </div>
    )

}

export default Contact;