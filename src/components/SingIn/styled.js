import styled from "styled-components";

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 100px;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.2) -50%, rgba(255, 255, 255, 0.05) 80%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const StInput = styled.input`
  margin: 25px 50px;
  padding: 10px 25px;
  background: none;
  border: 1px solid var(--light-primary-color);
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  color: var(--light-primary-color);
`;

export const StButton = styled.button`
  min-width: 300px;
  height: 50px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  color: #DBDEE5;
  border-radius: 5px;
  background-color: #5C5470;
  transition: all 0.2s ease;
  position: relative;
  margin: 25px 50px;
`;

export const StWrapper= styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const StFormSignIn = styled.div `
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 100px;
`;

export const StButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px
`;