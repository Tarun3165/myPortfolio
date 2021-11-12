import React from 'react'
import styled from 'styled-components';

function TechCard({title, width, imgUrl}) {
    return (
        <TechCardStyled>
            <div className="card">
               <div className="imgDiv">
                  <img className="image" src={ imgUrl} alt="" />
               </div>
               <h6>{title}</h6>
            </div>
        </TechCardStyled>
    )
}

const TechCardStyled = styled.div`
border: 1px solid var(--border-color);
padding: 4%;
height:33vh;
text-align: center;
box-shadow: inset 0 0 10px #000000;
&:hover{
  
    -webkit-box-shadow: 3px 3px 5px 6px black; 
  -moz-box-shadow:    3px 3px 5px 6px black;  
  box-shadow:         3px 3px 5px 6px black; 
  }
    .card{
        width: 100%;
        .imgDiv{
            width: 100%;
            height:25VH;
            /* border: 1px solid red; */
            .image{
               
              width: 100%;
              height: 24vh;
          }
        }
    }
       
`;

export default TechCard;
