import { useState } from 'react'
import { InfoContainer, ProjectImg, ProjectWrapper } from './projectCardStyled'
import Button from '../../UI/Button/Button';
import FlippedCard from '../FlippedCard/FlippedCard';
import FadeContent from '../React Bits/FadeContent/FadeContent';






const ProjectCard = ({ children, title, redirect, description, tools, projectCode }) => {

  const [flipped, setFlipped] = useState(false);


  return (

    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <ProjectWrapper>


        <ProjectImg
          animate={{ rotateY: flipped ? -180 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          flipped={flipped}
          onClick={(e) => {
            if (flipped) {
              e.stopPropagation();
              return;
            }
            if (redirect) {
              window.open(redirect, "_blank", "noopener,noreferrer");
            }
          }}
        >
          {!flipped ? children :

            <FlippedCard
              description={description}
              tools={tools}
              projectCode={projectCode} />}




        </ProjectImg>

        <InfoContainer>

          <h3>{title}</h3>
          <Button onClick={() => { setFlipped(!flipped) }}>
            {!flipped ? 'Ver Más' : 'Volver'}
          </Button>

        </InfoContainer>



      </ProjectWrapper>
    </FadeContent>

  )
}

export default ProjectCard
