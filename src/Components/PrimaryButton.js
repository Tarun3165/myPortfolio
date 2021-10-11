import React from 'react'
import styled from 'styled-components';

function PrimaryButton({title,href}) {
    return (
        <PrimaryButtonStyled href={href} target="_blank">
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
   
`;
export default PrimaryButton;
