import React, { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f"; // Replace with your actual API key
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
      // Handle the error here and provide user feedback
      setMovie(null);
    }
  };

  useEffect(() => {
    // Initial movie load
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {movie ? <MovieDisplay movie={movie} /> : <h1>No Movie to Display</h1>}
    </div>
  );
}