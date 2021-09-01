import styled from "styled-components";


export const StyledGames = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  padding: 1rem 1rem 0 3rem;
`;

export const Status = styled.div`
  margin: 1rem 0;
  input{
    border: none;
    outline: none;
    border-radius: 2rem;
    width: 50%;
    line-height: 2rem;
    padding-left: 1rem;
    background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.3)
    );
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  max-height: 65vh;
  overflow: scroll;
`;