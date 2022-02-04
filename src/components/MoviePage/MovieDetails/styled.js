import styled from 'styled-components';
import {COLORS} from '../../common/styles/colors';

export const StyledGapsUl = styled.ul`
  padding: 0;
  display: flex;
  gap: 25px;
  margin-bottom: 50px;
  margin-top: 9px;
`;
export const StyledInfoLi = styled.li`
  color: ${COLORS.white};
  align-items: center;
  border: 1px solid ${COLORS.white};
  height: 39px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.1em;
`;