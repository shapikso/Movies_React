import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import Button from "../../common/Button/Button";
import NoData from "../../common/NoData/NoData";
import PropTypes from "prop-types";
import { StCenter, StMovies } from "../styled";

const MoviesMainWrapper = ({movies, isLoading, loadMore}) => (
    (movies.length) ? (
        <>
            <StMovies>
                {movies.map(({id, backdrop_path: backdropPath, title, runtime, vote_average: voteAverage}) => (
                    <MovieCard
                        key={id}
                        id={id}
                        backdropPath={backdropPath}
                        title={title}
                        runtime={runtime}
                        voteAverage={voteAverage}
                    />
                ))}
            </StMovies>
            <StCenter>
                <Button
                    className="button"
                    isLoading={isLoading}
                    contentKey="Load more"
                    onClick={loadMore}
                />
            </StCenter>
        </>
    ) : isLoading ? false : (
        <NoData />
    )
);

MoviesMainWrapper.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading : PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
};

export default MoviesMainWrapper;

