import { useState, useEffect, useRef } from "react";
const KEY = "50b28e9c";

export function useMovies(query, callback){
	
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {

		callback?.();

		const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${KEY}`, 
		  {signal: controller.signal});

          if (!res) throw new Error("something went wrong with fetch");

          const data = await res.json();
          if (data.Response === "False") throw new Error("movie not found");

          setMovies(data.Search);
		  setError("")
        } catch (err) {
          console.error(err);

		  if(err.name !== "AbortError"){
			setError(err.message);
		  }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
	  //handleCloseMovie();
      fetchMovies();

	  return function(){
		controller.abort();
	  }
    },
    [query]
  );
  return {movies, isLoading, error}
}
	 