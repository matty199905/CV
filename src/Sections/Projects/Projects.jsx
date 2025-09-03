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
                        description={[ 
                            "E-commerce desarrollado en Next.js y estilada con Styled-Components:", 
                            "Integración de Mercado Pago.", 
                            "Registro de usuario e inicio de sesión", 
                            "Sistema de checkout y lógica de órdenes con rutas privadas.", 
                            "Formulario de contacto (Email.js) con respuesta automática.", 
                            "Todas las funcionalidades se integran mediante el uso de APIs REST."]}
                        tools={eCommerceTools}
                        projectCode={'https://github.com/matty199905/eCommerce-NextJs.git'}
                        redirect={"https://bottcherstore-ten.vercel.app/"}
                        title={"Bottchers"}
                        img={'/Imgs/Bottchers-Photo.jpg'} />

                </FadeContent>

                <FadeContent blur={true} d duration={1500} easing="ease-out" initialOpacity={0}>
                    <ProjectCard
                        description={[
  "Plataforma de streaming de series y películas desarrollada en CRA con React.js y Bootstrap:",
  "Consumo de la API de TMDB",
  "Barra de búsqueda integrada",
  "Filtros de búsqueda",
  "Páginas dinámicas para cada contenido con sus respectivos tráilers",
  "Redireccionamiento a plataformas de streaming externas para su visualización",
]}
                        tools={maxFlixTools}
                        projectCode={'https://github.com/matty199905/maxflix'}
                        redirect={"https://maxflix-jet.vercel.app/"}
                        title={"MaxFlix"}
                        img={'/Imgs/Maxflix-Photo.jpg'}
                    />
                </FadeContent>

                <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                    <ProjectCard
                        description={[ 
                            "Librería de cócteles con base de datos personalizada, desarrollada en Vite con React.js y estilada con Styled-Components:",
                            "Páginas dinámicas para cada cocktail con su respectiva recetas y método de preparación", 
                            "Filtros por: Búsqueda, Letra inicial, Perfiles de sabor, Tipo de alcohol", 
                            "Navegación con React Router", 
                            "Manejo de estado con Redux Toolkit",]}
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
