import React,{useEffect,useState} from 'react';
import instance from "./axios";
import requests from "./request";
import './Banner.css'

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                    ]
            );
            return request;

        }
        fetchData();
    },[]);

    function truncateString(str, num) {
        if (num > str?.length){
            return str;
        } else{
            str = str?.substring(0,num);
            return str+"...";
        }

    }


    return(
        <header style={{backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }} className={'banner'}>
            <div className={'banner_contents'}>
                <h1 className={'banner_title'}>{movie?.title||movie?.name||movie?.original_name}</h1>

                <div className={'banner_buttons'}>
                    <button className={'banner-button'}>Play</button>
                    <button className={'banner-button'}>My List</button>
                </div>

                <h1 className={'banner_description'}>{truncateString(movie?.overview,150)}</h1>
            </div>

            <div className={'banner_fadeBottom'}/>
        </header>
    )
}

export default Banner;
