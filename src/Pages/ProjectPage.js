import React from 'react';
import styled from 'styled-components';
import {InnerLayout,MainLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProjectCard1 from '../Components/ProjectCard1';
import ProjectCard2 from '../Components/ProjectCard2';
import pepperfry from '../img/pepperfry.png';
import primevideo from '../img/primevideo.png';


function ProjectPage() {
   
   

    return (
        <MainLayout>
         <InnerLayout>
            <ProjectPageStyled>
                <Title title={'projects'} span={'projects'}  />
                <div className="projects">
                    <ProjectCard1 
                        image={pepperfry} 
                        title={'Clone of pepperfry.com'} 
                        paragraph={'Pepperfry is an E-commerce Website that deals in home decor and all furniture products procured from all across India.'}
                       
                      sourceCode={"https://github.com/Tarun3165/pepperfryBackend.git"}
                      liveDemo={""}
                      videoDemo={"https://drive.google.com/file/d/1VdQOaIKyOOtCNWsU74sV608loTviUi4n/view?usp=sharing"}
                    />
                  
                    <ProjectCard2 
                        image={primevideo} 
                        title={'Clone of primevideo.com'} 
                        paragraph={'Prime Video is a streaming video service by Amazon, where we can watch hundreds ofTV shows and movies on our favorite devices.'}
                        teckStack={'Tech Stack: React , CSS, JAVASCRIPT , Express ,MongoDb Atlas  .'}
                        sourceCode={"https://github.com/hmntk/primevideoclone.git"}
                        liveDemo={" https://primevideoclone.vercel.app/"}
                        videoDemo={"https://drive.google.com/file/d/1vZU0A8Z_3oEKuwKhFjyJ5kgsU9m8vDgg/view?usp=sharing"}
                    />
                   
                </div>
            </ProjectPageStyled>
            </InnerLayout>
        </MainLayout>
    )
}

const ProjectPageStyled = styled.section`
    .projects{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
       
        @media screen and (max-width:850px){
            grid-template-columns: repeat(1, 1fr);
        }
       
       
    }
`;

export default ProjectPage;
