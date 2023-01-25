import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Loading from './../layout/Loading';
import Container from '../layout/Container';

import styles from './Project.module.css'

function Project() {

    const { id } = useParams() // Pega o Id da URL

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
       setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json' ,
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((error) => console.log(error))
       }, 200)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>{project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Project : {project.name} </h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Edit Project' : 'Close'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span> Category : </span> {project.category.name}
                                </p>
                                <p>
                                    <span> Total Budget : </span> ${project.budget}
                                </p>
                                <p>
                                    <span> Total Spent : </span> ${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <p>Form</p>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        
        ) : (

            <Loading />

        )}
        </>
    )
}

export default Project;
