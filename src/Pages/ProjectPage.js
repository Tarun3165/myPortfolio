import React from 'react';
import styled from 'styled-components';
import {InnerLayout,MainLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProjectCard from '../Components/ProjectCard';
import pepperfry from '../img/pepperfry.png';
import primevideo from '../img/primevideo.png';

function ProjectPage() {
    return (
        <MainLayout>
         <InnerLayout>
            <ProjectPageStyled>
                <Title title={'projects'} span={'projects'}  />
                <div className="projects">
                    <ProjectCard 
                        image={pepperfry} 
                        title={'Clone of pepperfry.com'} 
                        paragraph={'Pepperfry is an E-commerce Website that deals in home decor and all furniture products procured from all across India.'}
                        teckStack={'Tech Stack: HTML, CSS, JAVASCRIPT , Express ,MongoDb Atlas.'}
                      sourceCode={"https://github.com/Tarun3165/pepperfryBackend.git"}
                      LiveDemo={""}
                      VideoDemo={""}
                    />
                  
                    <ProjectCard 
                        image={primevideo} 
                        title={'Clone of primevideo.com'} 
                        paragraph={'Prime Video is a streaming video service by Amazon, where we can watch hundreds ofTV shows and movies on our favorite devices.'}
                        teckStack={'Tech Stack: React , CSS, JAVASCRIPT , Express ,MongoDb Atlas  .'}
                        sourceCode={"https://github.com/hmntk/primevideoclone.git"}
                        LiveDemo={""}
                        VideoDemo={""}
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
