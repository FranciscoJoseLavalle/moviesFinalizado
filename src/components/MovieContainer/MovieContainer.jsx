import MovieContainerMovie from "../MovieContainerMovie/MovieContainerMovie";
import MovieContainerVideo from "../MovieContainerVideo/MovieContainerVideo";
import './MovieContainer.css';

const MovieContainer = ({ hasSelect, isPlaying, setIsPlaying, movie, trailer }) => {
    return (
        <div className="movieContainer">
            {hasSelect ? (
                <div className="movieBig">
                    {isPlaying ? (
                        <MovieContainerVideo setIsPlaying={setIsPlaying} movie={movie} trailer={trailer} />
                    ) : (
                        <MovieContainerMovie setIsPlaying={setIsPlaying} movie={movie} trailer={trailer} />
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default MovieContainer