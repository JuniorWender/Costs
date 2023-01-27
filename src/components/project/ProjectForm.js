import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Message from '../layout/Message'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit , btnText , projectData }){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [nameStyle, setNameStyle] = useState('valid')
    const [budgetStyle, setBudgetStyle] = useState('valid')

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
        setMessage('')
        e.preventDefault()
        if (project.budget > 0 && project.category != null && project.name.length > 0)
            handleSubmit(project)
        else{
           setMessage('ERROR! Verify input values and try again!')
           setType('error')
        }   
    }

    function handleChange(e) {
        setMessage('')

        // if(project.budget == null || project.budget < 0){
        //     setBudgetStyle('invalid')
        //     setMessage('Error! Verify the budget and try again!')
        // }
        // if(project.name.length > 0){
        //     setNameStyle('invalid')
        //     setMessage('Proejct Name Is a Required Field!')
        // }

        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setMessage('')

        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <>
            {message && <Message type={type} msg={message} /> }
            <form onSubmit={submit} className={styles.form}>
                <Input 
                    type="text" 
                    text="Project Name" 
                    name="name" 
                    placeholder="Enter with the Project Name"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    customClass={nameStyle}
                    />
                <Input 
                    type="number" 
                    text="Project Budget" 
                    name="budget" 
                    placeholder="Total Project Budget" 
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                    customClass={budgetStyle}
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
        </>
    )
}

export default ProjectForm