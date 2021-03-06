import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.png';

function  Navigation({handleToggle} ) {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink onClick={()=>handleToggle()} to="/home" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={()=>handleToggle()} to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={()=>handleToggle()} to="/skills" activeClassName="active-class" exact>Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={()=>handleToggle()} to="/projects" activeClassName="active-class" exact>Projects</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink onClick={()=>handleToggle()} to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 <b>Tarun Singh Rawat</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    
    .avatar{
    width: 100%;
    flex-basis: 30%;
    border-bottom:1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    /* border: 1px solid red; */
    img{

        width: 85%;
        height: 92%;
        border-radius: 50%;
        border:8px solid var(--border-color);

    }
}

    .nav-items{
    flex-basis: 50%;
    /* border: 1px solid red; */
    margin-top: 5%;
    margin-bottom: 5%;
        width: 100%;
        text-align: center;
       
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        flex-basis: 30%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;
