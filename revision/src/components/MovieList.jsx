import { useEffect, useState } from "react";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch("http://localhost:3000/movies");
      if (!res.ok) throw new Error("Could not fetch");
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);
  return (
    <ul>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default MovieList;
