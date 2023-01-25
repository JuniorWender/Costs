import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Message from '../layout/Message'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit , btnText , projectData }){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/Categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        if (project.budget > 0 && project.category != null )
            handleSubmit(project)
        else{
            // <Message type="error" msg="Verify input fields and try again!"/>
            console.log('Verify input fields and try again!');
        }   
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Project Name" 
                name="name" 
                placeholder="Enter with the Project Name"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number" 
                text="Project Budget" 
                name="budget" 
                placeholder="Total Project Budget" 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="category_id" 
                text="Select a Category" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm