import styled from "styled-components";
import {COLORS} from '../common/styles/colors';

export const StMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  max-width: 1500px;
  padding: 0 40px;
  margin: 0 auto;
  ::after {
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(225.82deg, ${COLORS.darkPrimary} 24.16%, ${COLORS.primaryColor} 87.91%);
    position: fixed;
    top: 50px;
    left: -75px;
    z-index: -1;
  };
  ::before {
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(225.82deg, ${COLORS.darkPrimary} 24.16%, ${COLORS.primaryColor} 87.91%);
    position: fixed;
    bottom: 50px;
    right: -75px;
    z-index: -1;
  };
`;

export const StPlaceRight = styled.div`
  display: flex;
  justify-content: end;
  flex-shrink: 0;
`;

export const StMovies = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  grid-gap: 20px;
  justify-content: center;
  flex-grow: 1;
`;

export const StCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StFiltersModal = styled.div`
  background-color: #000000a1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 500%;
  padding: 50px;
  justify-content: center;
  align-items: center;
  display: ${({hidden}) => hidden ? 'none' : 'flex'};
`;

export const StOption = styled.option`
  color: #151C26;
`;
