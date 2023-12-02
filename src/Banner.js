import React, {useState, useEffect } from "react";
import "./Banner.css"
import axios from "./axios";
import requests from "./requests";

function Banner() {

    const [Movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results);
            
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request; 
        }
        fetchData();
    }, []); 

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>

            <div className="banner_contents">
                <h1 className="banner__title">
                    {Movie?.title || Movie?.name || Movie.original_name}
                </h1>
                <div>
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(Movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
        
    )
}


export default Banner;
 