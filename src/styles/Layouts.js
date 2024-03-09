import styled from "styled-components";


export const MainLayout = styled.div`
    padding: 5rem ;
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    @media screen and (max-width: 510px){
        padding: 2rem;
    }
    @media screen and (max-width: 400px){
        padding: 2rem 1.4rem;
    }
    @media screen and (max-width: 300px){
        padding: 2rem 0.4rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;