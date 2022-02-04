import styled from "styled-components";

export const StContainer = styled.div`
  max-width: 1500px;
  padding: 0 40px;
  margin: 0 auto;
`;

export const StHeaderContainer = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StHeaderLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StButtonLinkWrapper = styled.div`
  width: 100px;
  height: 40px;
  color: var(--light-primary-color);
  letter-spacing: 0.1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--light-primary-color);
  border-radius: 5px;

  padding: 5px;

  transition: all 0.25s ease;

  :active {
    background-color: var(--light-primary-color-opacity);
    border-color: transparent;
  }

  :hover {
    background-color: var(--light-primary-color);
    color: var(--dark-primary-color);
  }
  button{
    padding: 5px;
  }
  button: hover {
    background-color: var(--light-primary-color);
    color: var(--dark-primary-color);
  }
`;