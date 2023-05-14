// import { useEffect } from "react";
import React, { useEffect, useState } from 'react';
import './Movie.css'
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard'

// api_key = dc6710ea
const API_URL = "https://www.omdbapi.com?apikey=dc6710ea";

function App() {

    let [movies, allMovies] = useState([]);
    let [searchMovieTerm, setsearchMovieTerm] = useState("");

    useEffect(() => {
        searchMovies("spiderman")
        return () => {

        }
    }, [])

    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        allMovies(data.Search);

    }

    // const movies1 = {
    //     "Poster": "N/A",
    //     // "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
    //     "Title": "The Amazing Spiderman 2 Webb Cut",
    //     "Type": "movie",
    //     "Year": "2021",
    //     "imdbID": "tt18351128"

    // }




    return (
        <>
            <div className="app">
                <h1>MoviLand</h1>

                <div className="search">
                    <input type="text" placeholder='Search for Movie' value={searchMovieTerm} onChange={(e) => {setsearchMovieTerm(e.target.value)}} />
                    <img src={SearchIcon} alt="Search" onClick={() => { searchMovies(searchMovieTerm)}} />


                </div>

                {movies.length > 0 ?
                    (
                        <div className="container">
                            {movies.map((sing_movie) => (
                                <MovieCard movie={sing_movie} />
                            ))}
                        </div>
                    ):(
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
                }

            </div>
        </>
    );
};

export default App; 