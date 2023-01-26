import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, ProjectData}) {

    function submit() {

    }

    function handleChange(e) {
        
    }

    return (
        <form onSubmit={submit} className={styles.form} >
            <Input 
                type="text"
                text="Service Name"
                name="name"
                placeholder="Insert Service Name"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Service Cost"
                name="cost"
                placeholder="Insert Total Value"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="Service Description"
                name="description"
                placeholder="Describe The Service"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm