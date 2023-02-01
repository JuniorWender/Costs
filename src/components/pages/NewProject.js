import { useNavigate } from 'react-router-dom'

import API  from '../../config.json';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []
        
        fetch(API.url.api.Projects,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects', {state:{message: 'Project Created With Sucess!'}})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Create Project</h1>
            <p> Create The Project And After You Can Add The Services </p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project" />
        </div>
    )
}

export default NewProject;