import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import variables from "../var";


export default function MovieDetail() {
    let { id } = useParams();
    
    useEffect(() => {
        getMovieDetail(id);
    }, [id]);

    const [movieDetail, setMovieDetail] = useState({});

    const getMovieDetail = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${variables.key}&language=en-US`);

        const detail = await res.json();

        setMovieDetail(detail);
    }

    const bannerBG = {
        backgroundImage: `url('${ variables.imgUrlBase }${ movieDetail.backdrop_path }')`
    }

    const containerStyle = {
        marginTop: '-450px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const fullContainer = {
        float: "left", 
        marginTop: '30px'
    }

    return (
        <>
            <div className='banner-container'>
                <div className='banner' style={ bannerBG }></div>

                <Container style={ containerStyle }>

                    <img className='poster' alt='ws' src={`${variables.imgUrlBase}${movieDetail.poster_path}`} />

                    <div className='row movie-banner-info'>
                        <h1 className='movie-title'>
                            {movieDetail.original_title} <span>({movieDetail.release_date && movieDetail.release_date.split("-")[0]})</span>
                        </h1>

                        <div className='row'>
                            <span className='release-date'>
                                {movieDetail.release_date && `
                                    ${movieDetail.release_date.split("-")[2]}/${movieDetail.release_date.split("-")[1]}/${movieDetail.release_date.split("-")[0]}
                                `}
                            </span>

                            <ul className='movie-genre-list'>
                                {movieDetail.genres && movieDetail.genres.map(genre => (
                                    <li key={genre.id}>• {genre.name}</li>
                                ))}
                            </ul>

                            { movieDetail.homepage &&
                                <a rel="noreferrer" className='website' target="_blank" href={movieDetail.homepage}>Visit Website</a>
                            }
                        </div>
                        
                        <div className='row'>
                            <span className='sub-title'>Synopsis</span>
                            <p className='overview'>{movieDetail.overview}</p>
                        </div>
                    </div>

                </Container>
            </div>

            {/* `https://www.youtube.com/watch?v=${ video }` */}

            <Container>
                <div className='row companies-left-margin'>
                    <div className='col'>
                        <span className='sub-title'>Companies</span>
                        <ul>
                            {movieDetail.production_companies && movieDetail.production_companies.map(company => (
                                <li key={company.id}>
                                    {company.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='col'>
                        <span className='sub-title'>Movie Info</span>
                        <ul>
                            <li>
                                <b>Language:</b> {movieDetail.spoken_languages && movieDetail.spoken_languages[0].name}
                            </li>
                            <li>
                                <b>Country:</b> {movieDetail.production_countries && movieDetail.production_countries[0].name}
                            </li>
                            <li>
                                <b>Vote Average:</b> {movieDetail.vote_average}
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container style={ fullContainer }>
                <div className='row'>
       
                </div>
            </Container>
        </>
    );
}




