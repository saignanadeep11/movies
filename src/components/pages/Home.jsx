import { useEffect, useState } from "react";
import Header from "../common/Header";
import Movie from "../common/Movie";
import axios from "axios";

function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = response.data;

      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Movie movies={movies} />
    </>
  );
}

export default Home;
