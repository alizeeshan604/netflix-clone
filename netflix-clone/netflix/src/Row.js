import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios"
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargerow}) => {
  const [movies,setMovies]=useState([]);
  console.log(fetchUrl);
  useEffect(()=>{
    //if [],run once and dont again
    
    async function fetchData(){
        console.log("I came here");
        const request= await axios.get("https://api.themoviedb.org/3"+fetchUrl);
    console.log(request);
    setMovies(request.data.results);
    return request;
    }
    fetchData();



  },[fetchUrl])

console.log("The process is started");
console.log(isLargerow);

  console.log(movies);
  
    return (
    <div className="row">
        {/*title */}
       <h2>{title}</h2>
          <div className="row__posters">
          
          {movies.map(movie =>{ 
           return <img 
           key={movie.id}
           className={`row__poster ${isLargerow &&"row__posterLarge"}`}
           src={`${base_url}${isLargerow ? movie.poster_path:movie.backdrop_path}`} />
          })}

          </div>

    </div>
  )
}

export default Row