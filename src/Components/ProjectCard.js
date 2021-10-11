import React from 'react'
import styled from 'styled-components';

function ProjectCard({image, title, paragraph,teckStack,sourceCode,liveDemo,videoDemo}) {
    return (
        <ProjectCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <div className="content">
                    <hr  className="line"/>

                  <p>{paragraph}</p>
                  <p>{teckStack}</p>
                </div>
                <div className="flex">
                   <a target="_blanck" href={sourceCode}>Source Code</a>
                   <a target="_blanck" href={liveDemo}>Live Demo</a>
                   <a target="_blanck" href={videoDemo}>Video Demo</a>
                </div>
                    
            </div>
        </ProjectCardStyled >
    )
}

const ProjectCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border: 1px solid var(--border-color);
    
    &:hover{
        border: 1px solid var(--primary-color);
    }

    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
        }
     
    }

    .line{
        width: 100px;
        border: 1px solid var(--border-color);
    }
        .content{
            height: 230px;
        }
        .flex{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 10px;
        }
        a{
            flex-basis: 32%;
            padding: 3%;
            background-color: var(--primary-color);
            color:white;
            text-align: center;
        }
       

        p{
            padding: .8rem 0;
        }
        img{
            width: 100%;
            height:100%;
        }
    
`;

export default ProjectCard;
