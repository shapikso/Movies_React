import React from 'react';
import PropTypes from 'prop-types';
import {StyledGapsDiv, StyledGenresDiv, StyledMovieHeaderSpan} from './styled';

const GenreDetails = ({genres}) => (
    <>
        <StyledMovieHeaderSpan>Genres</StyledMovieHeaderSpan>
        <StyledGapsDiv>
            {genres.map((el) => <StyledGenresDiv key={el} >{el}</StyledGenresDiv>)}
        </StyledGapsDiv>
    </>
);

GenreDetails.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenreDetails;
