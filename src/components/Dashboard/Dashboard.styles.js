import styled from "styled-components";

export const StyledDashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;
  background: linear-gradient(
          to right bottom,
          rgba(255, 255, 255, 0.7),
          rgba(255, 255, 255, 0.3)
  );
  
  ul{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const UserInfo = styled.div`
  i{
    font-size: 5rem;
    margin: 1rem;
  }
`;

export const Link = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProBtn  = styled.div`
  background: linear-gradient(to right top, var(--seablue1), var(--seablue2));
  border-radius: 2rem;
  color: var(--white);
  padding: 1rem;
  position: relative;
  
  img{
    position: absolute;
    top: -10%;
    right: 10%;
  }
  h2 {
    width: 50%;
    color: white;
    font-weight: 600;
  }
`;

