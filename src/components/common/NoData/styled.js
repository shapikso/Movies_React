import styled from 'styled-components';
import {COLORS} from '../styles/colors';

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StSvg = styled.svg`
  width: 40%;
  height: 40%;
  color: ${COLORS.lightPrimaryColorOpacity};
`;

export const StMessage = styled.p`
  display: block;
  font-size: 50px;
  color: ${COLORS.lightPrimaryColorOpacity};
  text-align: center;
`;
