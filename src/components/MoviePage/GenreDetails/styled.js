import styled from 'styled-components';
import {COLORS} from '../../common/styles/colors';

export const StyledMovieHeaderSpan = styled.span`
  font-size: 36px;
  font-style: normal;
  font-weight: bold;
`;
export const StyledGapsDiv = styled.div`
  padding: 0;
  display: flex;
  gap: 25px;
  margin-bottom: 50px;
  margin-top: 9px;
`;
export const StyledGenresDiv = styled.div`
  text-transform: capitalize;
  color: ${COLORS.white};
  background-color: ${COLORS.primaryColor};
  margin-top: 10px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.1em;
`;