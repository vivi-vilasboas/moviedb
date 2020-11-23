import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Container from '../components/Container';
import MovieList from '../components/MovieList';
import variables from "../var";

export default function Search() {

    let { search } = useParams();

    const fullContainer = {
        float: "left", 
        marginTop: '30px'
    }

    useEffect(() => {
        getSearch();
    }); 

    const [searchResult, setSearchResult] = useState({}); 

    const getSearch = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${variables.key}&language=en-US&query=${search}&page=1&include_adult=false`);

        const result = await res.json();

        setSearchResult(result);
    }

    return(
        <>

            <Container style={ fullContainer }>
                <h6 className='section-title'>Results for: "{ search }"</h6>
                <MovieList list={ searchResult }></MovieList>
            </Container>
            { /*searchResult.results && searchResult.results.map(result => (
               <div key={result.id}>
                    {result.original_title}
               </div>
            )) */}
        </>
    )
}