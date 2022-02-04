import styled from 'styled-components';
import {COLORS} from '../styles/colors';

export const StButton = styled.button`
  min-width: ${({width}) => `${width || '300px'}`};
  height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  color: ${COLORS.lightPrimaryColor};
  border-radius: 5px;
  background-color: ${({color}) => `${color || COLORS.primaryColor}`};
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: ${COLORS.primaryColorOpacity};
  }

  &:active {
    background-color: ${COLORS.lightPrimaryColor};
    color: ${COLORS.darkPrimaryColor};
  }

  &[disabled] {
    background-color: ${COLORS.primaryColorDisabled};
    color: ${COLORS.lightPrimaryColorOpacity};
    cursor: not-allowed;
  }

  &[disabled].loader {
    color: transparent;
  }

  &--short {
    right: 0;
    min-width: 100px;
    height: 40px;
  }

  &--link {
    min-width: 100px;
    //height: 40px;
    color: ${COLORS.lightPrimaryColor};
    border: 1px solid ${COLORS.lightPrimaryColor};
    //letter-spacing: 0.1em;
    
    //border-radius: 5px;
    //padding: 5px;
    //transition: all 0.25s ease;
    background-color: transparent;
    text-decoration: none;

    &:hover {
      background-color: ${COLORS.lightPrimaryColor};
      color: ${COLORS.darkPrimaryColor};
    }

    &:active {
      background-color: ${COLORS.lightPrimaryColorOpacity};
      border-color: transparent;
    }
  }
`;