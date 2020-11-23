import React, { useState, useEffect } from "react"; 
import Container from "./Container";

export default function GenreList() {
  useEffect(() => {
    getGenresList();
  }, []);

 const [genresList, setGenresList] = useState({});

  const getGenresList = async () => {
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6396e5cd5a94bd0f0dadf2cf8b822d65&language=en-US");

    const genres = await res.json();

    setGenresList(genres);
  }
  
  return (
    <Container>
      <div className='sub-title'>Genres</div>

      <br />

      <ul className='genre-list'>
        { genresList.genres && genresList.genres.map(genre => (
          <li key={ genre.id }>
             { genre.name }
          </li>
        )) }
      </ul>
    </Container>
  );
}