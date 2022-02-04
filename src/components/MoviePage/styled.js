import styled from 'styled-components';
import {URL_IMG} from '../../constants/api';
import {COLORS} from '../common/styles/colors';

export const StyledWrapper = styled.div`
  max-width: 1500px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  ::after, ::before{
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(225.82deg, ${COLORS.darkPrimary} 24.16%, ${COLORS.primaryColor} 87.91%);
    position: fixed;
    top: 50px;
    left: -75px;
    z-index: -1;
  }
`;

export const StyledTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  margin: 50px 0 5px;
`;
export const StyledMovieDetails = styled.div`
  width: 100%;
  height: 650px;
  border: 1px solid ${COLORS.lightPrimaryColorOpacity};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 50px 50px 0 50px;
  overflow-y: scroll;
  background-Size: cover;
  background: linear-gradient( ${COLORS.darkOp7},${COLORS.darkOp7} ), url(${({path}) => URL_IMG + path})
`;