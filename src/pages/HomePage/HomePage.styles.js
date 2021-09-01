import styled from "styled-components";

export const Glass = styled.div`
  background: var(--white);
  min-height: 80vh;
  min-width: 60%;
  background: linear-gradient(
          to right bottom,
          rgba(255, 255, 255, 0.7),
          rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
  @media screen and (max-width: 720px){
    flex-direction: column;
  }
`;

export const Circle = styled.div(props => ({
    background: "linear-gradient(to right bottom, rgba(255,255,255,.8), rgba(255,255,255,.3))",
    width: '20rem',
    height: '20rem',
    borderRadius: "50%",
    position: "absolute",
    ...props.pos
}));