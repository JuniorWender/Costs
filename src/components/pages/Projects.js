import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import API  from '../../config.json';

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, SetremoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    useEffect( () => {
       setTimeout(() => {
            fetch(API.url.api.Projects, {
                method: 'GET',
                Headers: {
                    'Content-Type' : 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                SetremoveLoading(true)
            })
            .catch((error) => console.log(error))
       }, 300)
    }, []);

    function removeProject(id){
        fetch(`${API.url.api.Projects}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
        }).then(resp => resp.json())
          .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Project Removed With Success!')
          })
          .catch(error => console.log(error))
    }
    
    return (
        <div className={ styles.project_container } >
            <div className={ styles.title_container } >
                <h1>My Projects</h1>
                <LinkButton to="/NewProject" text="Create Project"/>
            </div>
            {message &&  <Message type="sucess" msg={message} /> }
            {projectMessage &&  <Message type="sucess" msg={projectMessage} /> }
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id} 
                            name={project.name} 
                            budget={project.budget} 
                            category={project.category.name}
                            handleRemove={removeProject}
                            key={project.id} 
                        /> 
                    ))
                }
                {!removeLoading && <Loading/> }
                {removeLoading && projects.length === 0 &&(
                    <p>You Haven't Projects!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects;