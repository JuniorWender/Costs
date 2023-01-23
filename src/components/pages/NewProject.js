import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newProject_container}>
            <h1>Create Project</h1>
            <p> Create The Project And After You Can Add The Services </p>
            <ProjectForm btnText="Create Project" />
        </div>
    )
}

export default NewProject;