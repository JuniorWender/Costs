import { json, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { parse, v4 as uuidv4 } from 'uuid'

import Loading from './../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from './../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams() // Pega o Id da URL

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

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
                setServices(data.services)
            })
            .catch((error) => console.log(error))
       }, 200)
    }, [id])
    
    function editPost(project) {
        setMessage('')

        if( project.budget < project.cost) {
            setMessage('The Budget Cannot Be Less Than The Cost Of The Project!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then(data => {
            setProject(data)
            setShowProjectForm(!showProjectForm)
            setMessage('Project Saved!')
            setType('sucess')
        })
        .catch(error => console.log(error))
    }

    function createService(project) {

        const lastService = project.services[project.services.length -1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage('Budget Exceeded, Check The Value Of The Service!')
            setType('error')
            project.services.pop()
            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            setShowServiceForm(false)
            console.log(data);
        })
        .catch(error => console.log(error))

    }

    function removeService(id,cost) {

        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
        .then(resp => resp.json())
        .then(() => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setType('sucess')
            setMessage('Service Removed With Success!')
        })
        .catch(error => console.log(error))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>{project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} /> }
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
                                <ProjectForm 
                                    handleSubmit={editPost} 
                                    btnText="Save Edit" 
                                    projectData={project}  
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Add Services:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Add Service' : 'Close'}
                        </button>
                        <div className={styles.project_info} >
                            {showServiceForm && (
                                <ServiceForm 
                                    handleSubmit={createService}
                                    btnText="Add Service"
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Services</h2>
                    <Container customClass="start" >
                        {services.length > 0 &&
                            services.map((service) => (
                                <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}

                                />
                            ))
                        }
                        {services.length === 0 && <p>There Are No Registered Services</p> }
                    </Container>
                </Container>
            </div>
        
        ) : (

            <Loading />

        )}
        </>
    )
}

export default Project;
