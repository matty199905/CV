import React from 'react'
import { ProjectsContainer, ProjectsWrapper } from './projectsStyled'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { useSelector } from 'react-redux'




const Projects = () => {

    const {color} = useSelector(state => state.Background)

    return (
        <ProjectsWrapper color={color}>

            <h2>PROYECTOS PERSONALES</h2>


            <ProjectsContainer>

                <ProjectCard
                    description={`E-commerce elaborado con ReactJs y Styled-Components. Permite registro de usuario e inicio de sesión. Posee checkout y lógica de órdenes con ruta privada, medio de contacto con respuesta automática, todo lo anterior mencionado mediante el uso de APIS Rest.`}
                    tools={'Styled Components - React Redux - Axios - Formik - Yup - Framer Motion - React Icons - EmailJs'}
                    projectCode={'https://github.com/matty199905/Bottchers'}
                    redirect={"https://bottchers-henna.vercel.app/"}
                    title={"Bottchers"}>

                    <div style={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                        <iframe
                            src="https://bottchers-henna.vercel.app/"
                            title="Bottchers"
                            width="100%"
                            height="100%"
                            style={{
                                borderRadius: "20px",
                                border: "none",
                                transform: "scale(0.4)",
                                transformOrigin: "0 0",
                                width: "250%",
                                height: "250%",
                                pointerEvents: "none",

                            }}
                        ></iframe>
                    </div>

                </ProjectCard>



                <ProjectCard
                    description={`Plataforma de Streaming de series y películas. Realizada con ReactJs y Bootstrap, basada en la API TMDB. Posee barra de búsqueda, filtros por géneros según la sección, paginas dinámicas con sus respectivos trailers y redireccionamiento a plataformas Streaming para ver el contenido.`}
                    tools={'Bootstrap - React Redux - Axios - Framer Motion - React Icons - React Youtube'}
                    projectCode={'https://github.com/matty199905/maxflix'}
                    redirect={"https://maxflix-jet.vercel.app/"}
                    title={"MaxFlix"}
                >
                  <div style={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                    <iframe
                        src="https://maxflix-jet.vercel.app/"
                        title="MaxFlix"
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: "20px",
                            border: "none",
                            transform: "scale(0.4)",
                            transformOrigin: "0 0",
                            width: "250%",
                            height: "250%",
                            pointerEvents: "none",
                        }}
                    >

                    </iframe>
                    </div>
                </ProjectCard>

            </ProjectsContainer>

        </ProjectsWrapper>
    )
}

export default Projects
