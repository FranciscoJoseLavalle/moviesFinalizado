import MovieCathegory from "../MovieCathegory/MovieCathegory";
import MovieContainer from "../MovieContainer/MovieContainer";
import './Main.css';

const Main = ({ hasSelect, isPlaying, setIsPlaying, movie, trailer, movies, fetchMovie }) => {
    let allGenres = [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ];
    return (
        <main>
            <MovieContainer hasSelect={hasSelect} isPlaying={isPlaying} setIsPlaying={setIsPlaying} movie={movie} trailer={trailer} />

            <div className="movies">
                {allGenres.map((genre) => (
                    <>
                        {movies.map((movieMap) => (
                            <>
                                {movieMap.genre_ids.map((genre_id) => (
                                    <>
                                        {genre.id === genre_id ? <>{(genre.exist = true)}</> : null}
                                    </>
                                ))}
                            </>
                        ))}
                        {genre.exist ? (
                            <MovieCathegory movies={movies} fetchMovie={fetchMovie} genre={genre} />
                        ) : null}
                    </>
                ))}
            </div>
        </main>
    )
}

export default Main