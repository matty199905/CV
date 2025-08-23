import { ProjectsContainer, ProjectsWrapper } from './projectsStyled'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { useSelector } from 'react-redux'
import FadeContent from '../../Components/React Bits/FadeContent/FadeContent'





const Projects = () => {

    const { color } = useSelector(state => state.Background)


    const eCommerceTools = [
        'Next JS',
        'Typescript',
        'Styled Components',
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
        <ProjectsWrapper color={color} id='proyects'>

            <h2>PROYECTOS PERSONALES</h2>


            <ProjectsContainer>


                <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                    <ProjectCard
                        description={`E-commerce desarrollado con Next.js y Styled-Components.
                                  Incluye registro de usuario e inicio de sesión, sistema de checkout y lógica de órdenes con rutas privadas. Cuenta con un medio de contacto con respuesta automática. Todas las funcionalidades se integran mediante el uso de APIs REST.`}
                        tools={eCommerceTools}
                        projectCode={'https://github.com/matty199905/eCommerce-NextJs.git'}
                        redirect={"https://bottcherstore-ten.vercel.app/"}
                        title={"Bottchers"}
                        img={'/Imgs/Bottchers-Photo.jpg'} />

                </FadeContent>

                <FadeContent blur={true} d duration={1500} easing="ease-out" initialOpacity={0}>
                    <ProjectCard
                        description={`Plataforma de streaming de series y películas, desarrollada en CRA con React.js y Bootstrap, utilizando la API de TMDB.
Incluye barra de búsqueda, filtros por género según la sección, y páginas dinámicas para cada contenido, con sus respectivos tráilers y redireccionamiento a plataformas de streaming externas para su visualización.`}
                        tools={maxFlixTools}
                        projectCode={'https://github.com/matty199905/maxflix'}
                        redirect={"https://maxflix-jet.vercel.app/"}
                        title={"MaxFlix"}
                        img={'/Imgs/Maxflix-Photo.jpg'}
                    />
                </FadeContent>

                <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                    <ProjectCard
                        description={`Librería de cócteles con base de datos personalizada, desarrollada en Vite con React.js y Styled-Components.
Incluye filtros avanzados por búsqueda, letra inicial, perfiles de sabor y tipo de alcohol. Cada cóctel cuenta con su receta detallada y método de preparación. La navegación se gestiona con React Router, y el manejo de estado con Redux Toolkit.`}
                        tools={theBooktailTools}
                        projectCode={'https://github.com/matty199905/The-Booktail.git'}
                        redirect={"https://the-booktail.vercel.app/"}
                        title={"The Booktail"}
                        img={'/Imgs/TheBooktail-Photo.jpg'} />

                </FadeContent>











            </ProjectsContainer>

        </ProjectsWrapper>
    )
}

export default Projects
