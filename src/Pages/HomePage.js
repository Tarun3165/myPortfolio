import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        

        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="content">
       
                <h1>Hi, I'm <span >Tarun Singh Rawat</span></h1>
                <p >
                I'm a full-stack web developer.
                </p>
                <div className="icons">
                    <a target="_blanck" href="https://www.linkedin.com/in/tarunrawat1997/" className="icon ">
                        <LinkedInIcon />
                    </a>
                    <a target="_blanck" href="https://github.com/Tarun3165" className="icon ">
                        <GithubIcon />
                    </a>
                       
                   
                </div>
            </div>
        </HomePageStyled>
      

    )
}

const HomePageStyled = styled.div`
    width: 100%;
    height: 100vh;

   
    
    .content{
        position: absolute;
        top: 40%;
        left: 10%;
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                padding: 1.4%;
                margin: 15px;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                
            }
            
        }
    }
`;

export default HomePage;
