import { useState } from 'react'
import { InfoContainer, ProjectImg, ProjectWrapper } from './projectCardStyled'
import Button from '../../UI/Button/Button';
import FlippedCard from '../FlippedCard/FlippedCard';






const ProjectCard = ({ children, title, redirect, description, tools, projectCode }) => {

  const [flipped, setFlipped] = useState(false);


  return (


    <ProjectWrapper>

      <ProjectImg
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)", rotateY: flipped ? -180 : 0 }}
        transition={{ duration: flipped ? 0.7 : 1, ease: "easeInOut" }}
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

  )
}

export default ProjectCard
