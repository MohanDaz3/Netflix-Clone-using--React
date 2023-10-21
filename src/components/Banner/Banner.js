import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'

function Banner() {
    const[movie,setMovie]=useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[18]);
            setMovie(response.data.results[5])
        })
    },[]);
  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
      <div className='content'>
        <div className='movie_title'>
            <img src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYhhwtzPjMmGg5SARrjVGAaUl1IhsasvAF8I1vcuJ82jgoK2MdnzxcdHjoLioQwaK7wvGDC8ua8UWyT7Pe8kR-FYj3IDpqbE6xwRVunOU1cuK1ikbe8YNYGAz_zZo_ogjLGepy1_j5_eC3UwHtalzMRxgxo3GSF4QbWAMdnCeMLeqYFt2cuIxQ.webp?r=258" alt="movie title" />
        </div>
        <h1 className='description'>{movie?movie.overview:""}</h1>
      <div className='banner_buttons'>
        <button className='button_play'><span className='play_icon'>&#9658;</span>play</button>
        <button className='button_info'>more info</button>
      </div>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
