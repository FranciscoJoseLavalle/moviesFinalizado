import React from 'react'

const MovieContainerMovieInfo = ({ trailer, movie, setIsPlaying }) => {
    return (
        <div className="movieBig__info">
            <div className="movieBig_info-header">
                {trailer ? (
                    <button onClick={() => setIsPlaying(true)}>
                        Play trailer
                    </button>
                ) : null}

                <h3>{movie.original_title}</h3>
            </div>
            <p className="movieBig__info-overview">{movie.overview}</p>
            <div className="movieBig__info-genres">
                {movie.genres.map((genre) => (
                    <small key={genre.id}>{genre.name}</small>
                ))}
            </div>
            <p
                className="movieBig__info-vote"
                style={{
                    color:
                        movie.vote_average > 7.5
                            ? "green"
                            : movie.vote_average > 5
                                ? "orange"
                                : "red",
                    borderColor:
                        movie.vote_average > 7.5
                            ? "green"
                            : movie.vote_average > 5
                                ? "orange"
                                : "red"
                }}
            >
                {movie.vote_average.toFixed(2)}
            </p>
            {movie.homepage ? <a
                href={movie.homepage}
                target="_blank"
                className="movieBig__info-site"
            >
                Sitio oficial
            </a> : null}

        </div>
    )
}

export default MovieContainerMovieInfo