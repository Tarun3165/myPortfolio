import React from 'react'
import styled from 'styled-components';
import html from "../img/html.png"
import css from "../img/css.png"
import javascript from "../img/javascript.png"
import express from "../img/express.png"
import mongodb from "../img/mongodb.png"
import node from "../img/node.png"
import material from "../img/material.png"
import react from "../img/react.png"
import redux from "../img/redux.png"

function ProjectCard2({image, title, paragraph,sourceCode,liveDemo,videoDemo}) {
    return (
        <ProjectCard2Styled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <div className="content">
                    <hr  className="line"/>

                  <p>{paragraph}</p>
                  <div className="techcard">
                        <div><img src={ react} alt="" /></div>
                        <div><img src={ javascript} alt="" /></div>
                        <div><img src={ mongodb} alt="" /></div>
                        <div><img src={ express} alt="" /></div>
                  </div>
                </div>
                <div className="flex">
                   <a target="_blanck" href={sourceCode}>Source Code</a>
                   <a target="_blanck" href={liveDemo}>Live Demo</a>
                   <a target="_blanck" href={videoDemo}>Video Demo</a>
                </div>
                    
            </div>
        </ProjectCard2Styled >
    )
}

const ProjectCard2Styled = styled.div`
    background-color: var(--background-dark-grey);
    border: 1px solid var(--border-color);
    text-align: center;
    
   
    &:hover{
        border: 1px solid white;
  }

    .container{
        padding: 0.8rem;
        h4{
            color: var(--white-color);
            font-size: 1.2rem;
            padding: 1rem 0;
            position: relative;
        }
        
    }
    
    .line{
        margin: auto;
        width: 100px;
        border: 1px solid var(--border-color);
    }
        .content{
            /* height: 230px; */
        }
        .flex{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 10px;
        }
        .techcard{
            width: 70%;
            margin: auto;
            margin-bottom: 6%;
            display: grid;
            grid-template-columns: repeat(6,1fr);
            gap: 10px;
            div {
            width: 100%;
            &:hover{

            }
            img{
                width: 100%;
                height: 100%;

            }

           }
        }

        a{
            flex-basis: 32%;
            padding: 3%;
            background-color: var(--primary-color);
            color:white;
            text-align: center;
            border: 1px solid rgb(16,18,26);
            cursor: pointer;

            &:hover{
        border: 1px solid white;
           }
        }
       

        p{
            padding: .8rem 0;
            font-size: 1rem;
        }
        img{
            width: 100%;
            height:100%;
        }
    
`;

export default ProjectCard2;
