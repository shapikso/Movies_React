import styled from "styled-components";
import {COLORS} from '../styles/colors';

export const StWrapper= styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StInput = styled.input`
  margin: 25px 0 25px;
  width: 100%;
  background: transparent;
  padding: 10px 25px;
  background: none;
  border: 1px solid ${COLORS.lightPrimaryColor};
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  color: ${COLORS.lightPrimaryColor};
 & [error] {
  border-color: ${COLORS.primaryColorInvalid};
}
`;

export const StForm = styled.form `
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.2) -50%, rgba(255, 255, 255, 0.05) 80%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 25px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

export const StFormContainer = styled.div `
  position: relative;
  &::before, &::after {
    content: '';
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(225.82deg, #352f44 24.16%, #5c5470 87.91%);
    position: absolute;
  }
  &::before {
    z-index: 0;
    left: -76px;
    bottom: -97px;
  }
  &::after {
    z-index: 2;
    right: -97px;
    top: -97px;
  }
`;

export const StInvalid = styled.div `
  position: absolute;
  width: 300px;
  height: 22px;
  font-size: 14px;
  color: var(--primary-color-invalid);
  bottom: -2px;
`;


