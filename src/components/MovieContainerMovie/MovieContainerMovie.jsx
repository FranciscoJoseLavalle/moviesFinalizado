import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MovieContainerMovieInfo from "../MovieContainerMovieInfo/MovieContainerMovieInfo";

const MovieContainerMovie = ({ hasSelect, isPlaying, setIsPlaying, movie, trailer, allGenres, movies, fetchMovie }) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <>
            <LazyLoadImage
                src={`${IMAGE_URL}/${movie.backdrop_path}`}
                alt={`${movie.original_title} image`}
                effect="blur"
                className="movie__image"
                width="100%"
                height="100%"
            />
            <MovieContainerMovieInfo movie={movie} trailer={trailer} setIsPlaying={setIsPlaying} />
        </>
    )
}

export default MovieContainerMovie