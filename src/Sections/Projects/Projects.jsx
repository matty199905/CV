import { ProjectsContainer, ProjectsWrapper } from './projectsStyled'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { useSelector } from 'react-redux'




const Projects = () => {

    const { color } = useSelector(state => state.Background)


    const eCommerceTools = [
        'Vite',
        'Typescript',
        'Styled Components',
        'React Router',
        'React Redux',
        'JWT',
        'Axios',
        'Formik',
        'Yup',
        'Framer Motion',
        'React Icons',
        'EmailJs'
    ].map((item) => { return <li>{item}</li> })


    const maxFlixTools = [
        'Create React App',
        'Bootstrap',
        'React Router',
        'React Redux',
        'Axios',
        'Framer Motion',
        'React Icons',
        'React Youtube'
    ].map((item) => { return <li>{item}</li> })


    const theBooktailTools = [
        'Vite',
        'Typescript',
        'Styled Components',
        'React Router',
        'React Redux',
        'React Icons',
        'Framer Motion',
    
    ].map((item) => { return <li>{item}</li> })


    return (
        <ProjectsWrapper color={color}>

            <h2>PROYECTOS PERSONALES</h2>


            <ProjectsContainer>

                <ProjectCard
                    description={`E-commerce desarrollado con Vite, React.js y Styled-Components.
Incluye registro de usuario e inicio de sesión, sistema de checkout y lógica de órdenes con rutas privadas. Cuenta con un medio de contacto con respuesta automática. Todas las funcionalidades se integran mediante el uso de APIs REST.`}
                    tools={eCommerceTools}
                    projectCode={'https://github.com/matty199905/Bottchers.git'}
                    redirect={"https://bottcherstore.vercel.app/"}
                    title={"Bottchers"}>

                    <div style={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                        <iframe
                            src="https://bottcherstore.vercel.app/"
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
                                overflow: "hidden",

                            }}
                        ></iframe>
                    </div>

                </ProjectCard>



                <ProjectCard
                    description={`Plataforma de streaming de series y películas, desarrollada con React.js y Bootstrap, utilizando la API de TMDB.
Incluye barra de búsqueda, filtros por género según la sección, y páginas dinámicas para cada contenido, con sus respectivos tráilers y redireccionamiento a plataformas de streaming externas para su visualización.`}
                    tools={maxFlixTools}
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
                                overflow: "hidden",
                            }}
                        >

                        </iframe>
                    </div>
                </ProjectCard>



                 <ProjectCard
                    description={`Librería de cócteles con base de datos personalizada, desarrollada con Vite, React.js y Styled-Components.
Incluye filtros avanzados por búsqueda, letra inicial, perfiles de sabor y tipo de alcohol. Cada cóctel cuenta con su receta detallada y método de preparación. La navegación se gestiona con React Router, y el manejo de estado con Redux Toolkit.`}
                    tools={theBooktailTools}
                    projectCode={'https://github.com/matty199905/The-Booktail.git'}
                    redirect={"https://the-booktail.vercel.app/"}
                    title={"The Booktail"}>

                    <div style={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                        <iframe
                            src="https://the-booktail.vercel.app/"
                            title="The Booktail"
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
                                overflowY: 'hidden',

                            }}
                        ></iframe>
                    </div>

                </ProjectCard>

            </ProjectsContainer>

        </ProjectsWrapper>
    )
}

export default Projects
