import styled from "styled-components";
import {COLORS} from '../styles/colors';

export const StWrapper= styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StInput = styled.input`
  margin: 25px 50px;
  padding: 10px 25px;
  background: none;
  border: 1px solid ${COLORS.lightPrimaryColor};
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  color: ${COLORS.lightPrimaryColor};
 & [error] {
  border-color: ${COLORS.primaryColorInvalid};
}
`;
