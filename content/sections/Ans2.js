import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q1 = () => {
    return (
        <StyledWrapper>
            <Container >
                
                
                <QuestionsDiv>
                  
                    <GridContainer>
                        <GridItem style={{backgroundColor:"white"}}>1st</GridItem>
                        <GridItem style={{backgroundColor:"#def3fc"}}>2nd</GridItem>
                        <GridItem style={{backgroundColor:"white"}}>3rd</GridItem>
                        <GridItem style={{backgroundColor:"#def3fc"}}>4th</GridItem>
                    </GridContainer>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`


const QuestionsDiv = styled.div``

const GridContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
`
const GridItem=styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
`