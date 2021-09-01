import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --white: #fff;
    --seablue1: #65dfc9;
    --seablue2: #6cdbeb;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent; 
  }

  h1 {
    color: #426696;
    font-weight: 600;
    font-size: 2.5rem;
    opacity: 0.8;
  }
  h2,
  p {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }

  h3 {
    color: #426696;
    font-weight: 600;
    opacity: 0.8;
  }


  li{
    list-style: none;
  }
  
  i{
    color: var(--seablue2);
    font-size: 2rem;
  }
  
  .App{
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;