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
text-align: center;
box-shadow: inset 0 0 10px #000000;
&:hover{
    /* border: 1px solid white; */
    -webkit-box-shadow: 3px 3px 5px 6px black;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px black;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px black; 
  }
    .card{
        width: 100%;
        .imgDiv{
            width: 100%;
            height:25VH;
            .image{
               
              width: 100%;
              height: 24vh;
          }
        }
    }
       
`;

export default TechCard;
