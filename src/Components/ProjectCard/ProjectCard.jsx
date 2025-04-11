import React, { useState } from 'react'
import { InfoContainer, ProjectContainer, ProjectWrapper } from './projectCardStyled'
import Button from '../../UI/Button/Button';
import FlippedCard from '../FlippedCard/FlippedCard';




const ProjectCard = ({ children, title, redirect, description, tools, projectCode }) => {

  const [flipped, setFlipped] = useState(false);


  return (

    <ProjectWrapper>


      <ProjectContainer
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
        { !flipped ? children : 

        <FlippedCard 
        description={description}
        tools={tools} 
        projectCode={projectCode}/>}




      </ProjectContainer>

      <InfoContainer>

<h3>{title}</h3>
<Button onClick={() => {setFlipped(!flipped)}}>
  {!flipped ? 'Ver Más' : 'Volver'}
</Button>

</InfoContainer>



    </ProjectWrapper>


  )
}

export default ProjectCard
