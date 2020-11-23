import React, { useEffect, useState } from "react";
import variables from "../var";
import MovieList from "../components/MovieList";
import Container from "../components/Container";

export default function Home(){
    useEffect(() => {
        getPopularMovieList();
        getNowPlayingMovieList();
        getTopRatedMovieList();
    }, []);

    const [popularMovieList, setPopularMovieList] = useState({});
    const [nowPlayingMovieList, setNowPlayingMovieList] = useState({});
    const [topRatedMovieList, setTopRatedMovieList] = useState({});

    const fullContainer = {
        float: "left", 
        marginTop: '30px'
    }

    const home = { 
        marginBottom: '100px',
        display: 'block',
        float: 'left'
    }

    const getPopularMovieList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${variables.key}`);

        const list = await res.json();

        setPopularMovieList(list);
    }

    const getNowPlayingMovieList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${variables.key}&language=en-US`);

        const list = await res.json();

        setNowPlayingMovieList(list);
    }

    const getTopRatedMovieList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${variables.key}&language=en-US`);

        const list = await res.json();

        setTopRatedMovieList(list);
    }

    return(
        <>
            <section style={ home }>
                <Container style={ fullContainer }>
                    <h6 className='section-title'>Popular Movies</h6>
                    <MovieList list={ popularMovieList }></MovieList>
                </Container>

                <Container style={ fullContainer }>
                    <h6 className='section-title'>Latest Movies</h6>
                    <MovieList list={ nowPlayingMovieList }></MovieList>
                </Container>

                <Container style={ fullContainer }>
                    <h6 className='section-title'>Top Rated Movies</h6>
                    <MovieList list={ topRatedMovieList }></MovieList>
                </Container>
            </section>
        </>
    )
}