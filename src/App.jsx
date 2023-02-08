import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});
  const [hasSelect, setHasSelect] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "35627d0c839e289546d71029e8068e67";

  const fetchMovies = (searchKey) => {
    const type = searchKey ? "search" : "discover";
    axios

      .get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey
        }
      })
      .then((data) => {
        setMovies(data.data.results);
        if (data.data.results.length > 0) {
          type === "search"
            ? fetchMovie(data.data.results[0].id)
            : fetchMovie(data.data.results[Math.round(Math.random() * 20)].id);
        }
      });
  };

  const fetchMovie = (id) => {
    window.scroll(0, 0);
    axios
      .get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: "videos"
        }
      })
      .then((data) => {
        setMovie(data.data);
        if (data.data.videos && data.data.videos.results) {
          const trailer = data.data.videos.results.find(
            (vid) => vid.type === "Trailer"
          );
          setTrailer(trailer ? trailer : data.data.videos.results[0]);
          !trailer && setIsPlaying(false);
        }

        setHasSelect(true);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header fetchMovies={fetchMovies} />

      <Main hasSelect={hasSelect} isPlaying={isPlaying} setIsPlaying={setIsPlaying} movie={movie} trailer={trailer} movies={movies} fetchMovie={fetchMovie} />
    </div>
  );
}
