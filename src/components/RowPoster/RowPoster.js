import React,{useState,useEffect} from 'react'
import './RowPoster.css'
import {imageUrl,API_KEY} from '../../Constants/constants'
import axios from '../axios'
import Youtube from 'react-youtube'

function RowPoster(props) {
    const[movies,setMovies]=useState([])
    const[urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            alert('network error')
        })

    },[]);
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
        //   https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((reposnse)=>{
            console.log(reposnse.data);
            if(reposnse.data.results.length!==0){
                setUrlId(reposnse.data.results[0])
            }else{
                alert('trailer not available')
            }
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className='poster' src={`${imageUrl+obj.poster_path}`} alt="poster card" />
            )}
      

      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPoster
