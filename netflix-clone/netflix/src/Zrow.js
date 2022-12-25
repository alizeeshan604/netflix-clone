import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios"
import "./Row.css"


const ZRow = ({title,fetchUrl,isLargerow}) => {
  
    


const images=[
{myattr:"./images/1.jpeg"},
{myattr:"./images/2.jpeg"},
{myattr:"./images/3.jpeg"},
{myattr:"./images/4.jpeg"},
{myattr:"./images/5.jpeg"},
{myattr:"./images/6.jpeg"},
{myattr:"./images/7.jpeg"},
{myattr:"./images/8.jpeg"},
{myattr:"./images/9.jpeg"},
{myattr:"./images/10.jpeg"},
{myattr:"./images/11.jpeg"},
{myattr:"./images/12.jpeg"},
]






  
    return (
    <div className="row">
        {/*title */}
       <h2>{title}</h2>
          <div className="row__posters">
          
          {images.map(image =>{
            console.log(image.myattr);
           return <img 
         
           className="row__poster"
           src={image.myattr} />
          })}

          </div>

    </div>
  )
}

export default ZRow