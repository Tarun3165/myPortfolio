import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import TechCard from './TechCard';
import html from "../img/html.png"
import css from "../img/css.png"
import javascript from "../img/javascript.png"
import react from "../img/react.png"
import redux from "../img/redux.png"
import mongodb from "../img/mongodb.png"
import node from "../img/node.png"
import bootstrap from "../img/bootstrap.png"
import material from "../img/material.png"
import express from "../img/express.png"

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                       
                    
                        <TechCard 
                            imgUrl={html}
                            title={'HTML5'}
                           
                        />
                        <TechCard 
                        imgUrl={css}
                        title={'CSS3'}
                            
                        />
                        <TechCard
                        imgUrl={javascript} 
                        title={'JAVASCRIPT'}
                    />
                    
                        <TechCard
                        imgUrl={react} 
                        title={'React JS'}
                                
                               
                            />
                        <TechCard
                        imgUrl={redux} 
                        title={'Redux'}
                                
                               
                            />
                        <TechCard
                        imgUrl={node} 
                        title={'Node Js'}
                            
                            
                        />
                        <TechCard
                        imgUrl={express} 
                        title={'Express'}
                            
                           
                        />
                        <TechCard
                        imgUrl={mongodb} 
                        title={'MongoDb'}
                            
                            
                        />
                        <TechCard
                        imgUrl={bootstrap} 
                        title={'Bootstrap'}
                            
                            
                        />
                        <TechCard
                        imgUrl={material} 
                        title={'Material Ui'}
                            
                            
                        />
                       
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 750px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
