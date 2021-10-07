import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Tarun Singh Rawat</span></h4>
                <p className="paragraph">
                An aspiring full stack developer anda determined problem solver with200+ hours of coding experience withspecialization in MERN Stack.Passion for building scalable webapplications and interested in beinga part of a product based company
                    
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
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
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
export default ImageSection;
