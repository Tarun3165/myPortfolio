import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function AboutSection() {
    return (
        <AboutSectionStyled>
            
            <div className="right-content">
                <h4>I am <span>Tarun Singh Rawat</span></h4>
                <p className="paragraph">
                An aspiring full stack developer and a determined problem solver with 200+ hours of coding experience with specialization in MERN Stack. Passion for building scalable webapplications and interested in being a part of a product based company
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Tarun Singh rawat</p>
                        <p>: 24</p>
                        <p>: Indian </p>
                        <p>: English, Hindi</p>
                        <p>: Dehradun, Uttrakhand</p>
                    </div>
                </div>
                <PrimaryButton  href={"https://drive.google.com/file/d/1vCBne3mx4Dzt657j7gP6nO1f1ohzvG8r/view?usp=sharing"} title={'View Resume'} />
            </div>
        </AboutSectionStyled>
    )
}


const AboutSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default AboutSection;
