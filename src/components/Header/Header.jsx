import React from 'react'
import './Header.css';

const Header = ({ fetchMovies }) => {
    return (
        <header className="header">
            <h1>Movies</h1>
            <input
                type="text"
                placeholder="Name of the movie"
                onInput={(e) => fetchMovies(e.target.value)}
            />
        </header>
    )
}

export default Header