import React from "react";
import instance from "./axios";
import YouTube from 'react-youtube';
import requests from './requests';
import movieTrailer from 'movie-trailer'
export default function Row({title, fetchURL, rowType}){
  const [movies, setMovies] = React.useState([])
  const [videoId, setVideoId] = React.useState("") 
  const [player, setPlayer] = React.useState(false)
  React.useEffect(()=> {
    const fetchData = async () => {
      const data = await instance.get(fetchURL)
      const newMovies = data.data.results.map(movie => ({
        ...movie,
        isClicked: false
      }))

      setMovies(newMovies)
    }
      fetchData()
  },[fetchURL])
  function handleClick(title, id) {
    // const trailer = async () => {
    // const response = await instance.get(`/movie/${id}?api_key=8f7addb91d8f4ecd005843ce770e9103&append_to_response=videos`)
    // setVideoId(response.data.videos.results[0].key)
    // console.log(response)
    // }
    // console.log(title)
    if (videoId) {
      setVideoId('')
    } else {
      movieTrailer(null, {apiKey: "8f7addb91d8f4ecd005843ce770e9103", id: true, tmdbId: id})
      .then(response => setVideoId(response))
      // trailer()
      // try {
      //   trailer()}
      // catch (error) {
      //     movieTrailer(title).then((res) => setVideoId(res))
      //   }
    }
    
    console.log(`${title}: ${id}`)
    setPlayer(prev => !prev)
  }
  const posterElements = movies.map(movie => {
        return <img key={movie.id} alt={movie.original_name || movie.original_title} src={`https://image.tmdb.org/t/p/w500/${title === "Netflix Originals" ? movie.poster_path : movie.backdrop_path}`} onClick={(event)=>handleClick(movie.original_name || movie.original_title, movie.id)}/>})
  return (
    <div>
      <h3 className="row--title">{title}</h3>
      <div className={rowType}>
        {posterElements}
      </div>
      <div style={{textAlign: "center"}}>
      {videoId && player && <YouTube videoId={videoId} opts={{
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}}/>}
      </div>
    </div>
    
  )
}