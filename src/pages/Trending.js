import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "../styles/Trending.css";
import PaginationCustom from "../components/PaginationCustom";
function Trending() {
  const [continut, setContinut] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

    setContinut(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    //eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="contentTrending">
        {continut &&
          continut.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
      <PaginationCustom setPage={setPage} />
    </div>
  );
}

export default Trending;
