import styled from 'styled-components';
import {COLORS} from '../styles/colors';

export const StyledMainDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
export const StyledSecondDiv = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background:  ${COLORS.white};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  :nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  :nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  :nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  :nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
`;