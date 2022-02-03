import styled, { keyframes } from "styled-components";
import {COLORS} from "../../common/styles/colors";

const unscale = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const scale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const StFilmPoster = styled.div`
    background: ${COLORS.black};
    width: 100%;
    max-height: 200px;
    height: 100%;
    overflow: hidden;
    transition: max-height 0.5s ease;
`;

export const StImg = styled.img`
    width: 100%;
    height: 200px;
    animation: ${unscale} 0.5s ease;
    :hover {
      animation: ${scale} 0.5s ease forwards;
    }
`;

export const StDescription = styled.div`
  width: 100%;
  max-height: 50px;
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: flex-end;
  background: ${COLORS.primaryColorOpacity};
  transition: max-height 0.5s ease;
  overflow: hidden;
`;

export const StCard = styled.div`
  width: 340px;
  height: 250px;
  font-size: 16px;
  position: relative;
  margin-bottom: 80px;
  border-radius: 10px;
    :hover {
      cursor: pointer;
    }
`;

export const StCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const StFilmName = styled.div`
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StFilmDuration = styled.div`
  max-width: 30%;
`;

export const StFilmRate = styled.div`
  width: 50px;
  height: 22px;
  position: absolute;
  left: -10px;
  top: 10px;

  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  background-color: ${({isGoodRate}) => isGoodRate ? `${COLORS.goodRate}` : `${COLORS.badRate}`};
`;






