import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function AboutSection() {
    return (
        <AboutSectionStyled>
            
            <div className="right-content">
                <h4>I am <span>Tarun Singh Rawat</span></h4>
                <p className="paragraph1"> An aspiring full stack developer and a determined problem solver with 200+ hours of coding experience with specialization in MERN Stack.</p>
                <p className="paragraph2">In my spare time, I really enjoy playing chess and solving cubes. It is a great de-stressor. This ensures that I’m always at my best while working.</p>
                <p className="paragraph3">I have a Passion for building scalable webapplications and interested in being a part of a product based company.</p>
                
                    
                
                <PrimaryButton  href={"https://drive.google.com/drive/folders/1sOdFtVRpKFthXq62KF8aBqoGvB2nLdyg?usp=sharing"} title={'View Resume'} />
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
        .paragraph1{
            padding: 1rem 0;
        }
        .paragraph2{
            padding-bottom: 1rem;
        }
        .paragraph3{
            padding-bottom: 1rem;
        }
       
        
    }
`;
export default AboutSection;
