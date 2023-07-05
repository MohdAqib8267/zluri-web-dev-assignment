import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const Feedback = () => {
  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h1>Feedback Requested - Dedicated to Growth and Excellence</h1>
          {/* <h4>Thanks for taking up this assignment.</h4> */}
          {/* <p>Anything you would like to add over here?</p> */}
        </Title>

        <FeedbackDiv>
          <p>
            Thank you sincerely for granting me this opportunity. I am truly
            dedicated to delivering my best work and continuously striving for
            excellence. If you have any suggestions or feedback regarding my
            code, I would greatly appreciate it. I am eager to learn and enhance
            my skills to become a seasoned professional. After reviewing my
            submission, your feedback will be invaluable to my growth and
            development. Thank you for taking the time to consider my work.
          </p>
        </FeedbackDiv>
      </Container>
    </StyledWrapper>
  );
};

export default Feedback;

const StyledWrapper = styled(Wrapper)`
  background: #ffffff;
`;

const Title = styled.div`
  h1 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 16px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
  }
`;
const FeedbackDiv = styled.div`
  p {
    font-family: "Lexend Medium";
    font-size: 16px;
    font-weight: 200;
    line-height: 40px;
    color: rgb(0, 0, 0);

     @media (max-width: 768px) {
        line-height: 20px;
        padding-bottom: 50px;  
    }
  }
 
`;
