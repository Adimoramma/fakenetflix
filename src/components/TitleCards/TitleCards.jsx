import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import { Link } from "react-router-dom";

const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2VlZjEwZWMxOWFlZmU0ZmY5Yzg4NGJkMDNjNTE0MSIsIm5iZiI6MTc2MzY0MjkwNy4zMjYwMDAyLCJzdWIiOiI2OTFmMGUxYmI4NjA3MTBhZDhmYTJhZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HKexWmclN4mnNQMVnCBnziXkggnAcyHFPq7Anv2Z0vw",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);

    return () => {
      cardsRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;


