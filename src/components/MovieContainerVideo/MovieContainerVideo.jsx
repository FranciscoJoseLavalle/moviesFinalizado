import YouTube from "react-youtube";

const MovieContainerVideo = ({ setIsPlaying, movie, trailer }) => {
    return (
        <>
            <div className="movieBig_info-header">
                <button onClick={() => setIsPlaying(false)}>
                    Close trailer
                </button>
                <h3>{movie.original_title}</h3>
            </div>
            <YouTube
                videoId={trailer.key}
                className="reproductor container"
                containerClassName={"youtube-container amru"}
                opts={{
                    width: "100%",
                    height: "450rem",
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0
                    }
                }}
            />
        </>
    )
}

export default MovieContainerVideo