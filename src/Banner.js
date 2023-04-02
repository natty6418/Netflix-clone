import React from 'react'
import instance from './axios';
import requests from './requests'
import Row from './Row';
import bannerMovies from "./bannerMovies"
function Banner() {
    const [movie, setMovie] = React.useState([])
    React.useEffect(()=> {
            //console.log(data.data.results[Math.floor(Math.random()*(data.data.results.length))])
            setMovie(bannerMovies[Math.floor(Math.random()*(bannerMovies.length))])
        
    }, [])
    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    const style = {
        backgroundImage: `linear-gradient(90deg, #141414, transparent, rgba(37,37,37,0.41)), linear-gradient(180deg, rgba(225, 225, 225, 0) 9%, #141414), url(${movie.poster_path})`,
        backgroundPosition: "50%"
    }
  return (
    <div style={movie && style} className='banner--main'>
      <div className='banner--components'>
        <h1 className='banner-title'>{movie.title}</h1>
        <div className='buttons'>
            <button className='play-btn'><img className='play-logo' src={require('./images/play_logo.png')}/>Play</button>
            <button className='more-info-btn'><img className='info-logo' src={require('./images/info_logo.png')}/>More info</button>
        </div>
        <h4 className='banner--description'>{movie.overview && truncateString(movie.overview, 150)}</h4>
        {<div className="banner--fade">
            
  </div>}
      </div>

    </div>
  )
}

export default Banner
