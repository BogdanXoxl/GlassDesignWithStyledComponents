import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(
          to left top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.5)
  );
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  border-radius: 1rem;
`;

export const CardInfo = styled.div`
  width: 60%;
  margin-left: 1rem;
`;

export const Progress = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(236, 236, 236);
    position: absolute;
    left: ${({percentage}) => percentage}%;
  }
`;

export const Percentage = styled.h2`
  font-weight: bold;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;