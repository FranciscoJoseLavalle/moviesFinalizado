import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './Movie.css';

const Movie = ({ fetchMovie, movieMap }) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <>
            <div
                className="movie"
                key={movieMap.id}
                onClick={() => fetchMovie(movieMap.id)}
            >
                <div>
                    <LazyLoadImage
                        src={`${IMAGE_URL}/${movieMap.poster_path}`}
                        alt={`${movieMap.original_title} image`}
                        effect="blur"
                        className="movie__image"
                        height="400px"
                        width="100%"
                    />
                    <h3>{movieMap.original_title}</h3>
                    <small>{movieMap.overview}</small>
                </div>
            </div>
        </>
    )
}

export default Movie