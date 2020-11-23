import React, { useEffect, useState } from "react";
import variables from "../var";

export default function MovieList(props) {
    useEffect(() => {
        setMovieList(props.list);
    }, [props.list]);

    const [movieList, setMovieList] = useState({});

    return (
        <>              
            <div className='horizontal-scroll-container'>

                {movieList.results && movieList.results.map(movie => (
                    <a 
                        href={`/movie-detail/${movie.id}`}
                        key={movie.id} className='movie-card'
                        alt={movie.original_title} 
                        title={movie.original_title}
                    >
                        <div className="average">{movie.vote_average}</div>

                        {movie.poster_path && <img alt={movie.original_title} src={`${ variables.imgUrlBase }${ movie.poster_path }`} />}

                        {!movie.poster_path && <img alt={movie.original_title} width='170' height='255' src="https://secure.i.telegraph.co.uk/multimedia/archive/01718/cinema1_1718651c.jpg" />}

                        <div className='info-movie'>
                            <span 
                                className='info-movie-title' 
                                alt={movie.original_title} 
                                title={movie.original_title}>
                                    
                                {movie.original_title}
                            </span> 
                            
                            <br />

                            <span className='info-movie-data'>
                                {movie.release_date && `
                                    ${movie.release_date.split("-")[2]}/${movie.release_date.split("-")[1]}/${movie.release_date.split("-")[0]}
                                `}
                            </span>
                        </div>
                    </a>
                ))}

            </div>
        </>
    )
}