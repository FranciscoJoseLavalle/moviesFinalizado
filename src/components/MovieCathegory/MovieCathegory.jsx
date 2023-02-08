import Movie from "../Movie/Movie";
import './MovieCathegory.css';

const MovieCathegory = ({ movies, fetchMovie, genre }) => {
    return (
        <div>
            <h2>{genre.name}</h2>
            <div className="moviesCathegory">
                {movies.map((movieMap) => (
                    <>
                        {movieMap.genre_ids.map((genre_id) => (
                            <>
                                {genre.id === genre_id ? (
                                    <>
                                        {(genre.exist = true)}
                                        <Movie movieMap={movieMap} fetchMovie={fetchMovie} />
                                    </>
                                ) : null}
                            </>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default MovieCathegory