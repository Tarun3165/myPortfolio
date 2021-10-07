import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
// import ResumeIcon from '@material-ui/icons/Resume';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Tarun Singh Rawat</span></h1>
                <p>
                A
n aspiring full stack developer anda determined problem solver with200+ hours of coding experience withspecialization in MERN Stack.Passion for building scalable webapplications and interested in beinga part of a product based company
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/tarun-rawat-3832a7162/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Tarun3165?tab=repositories" className="icon i-github">
                        <GithubIcon />
                    </a>
                    {/* <a href="https://codepen.io/pen/" className="icon i-resume">
                        <ResumeIcon />
                    </a> */}
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

           
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
