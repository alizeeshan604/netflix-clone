import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import requests from './requests';
import axios from 'axios';
import "./Banner.css"
const Banner = () => {
  const [movie,setMovie]=useState([]);
  
  useEffect(()=>{
    async function FetchData(){
      const request= await axios.get("https://api.themoviedb.org/3"+requests.fetchNetflixOriginals)
      setMovie(request.data.results
        [Math.floor(Math.random()*request.data.results.length -1)]);

    return request;
    }
    FetchData();



  },[]);
  





  
  
  
    return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage: `url(
            https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition:"center center"




    }}
    >
        <div className="banner__contents">
            {/* title */}
            <h1 className='banner__title'>{movie?.title||movie?.name||movie?.original_name}</h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{movie?.overview}</h1>





        </div>





    </header>


  )
}

export default Banner