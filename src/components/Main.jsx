import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

let API_key = "&api_key=70c542e25de0efde7b21b84e9681ab5e";
let base_url = "https://api.themoviedb.org/3";
let url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70c542e25de0efde7b21b84e9681ab5e"; /*base_url + "discover/movie?sort_by=popularity.desc" + API_key;*/
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

function Main() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();
  console.log(url_set);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "Popular") {
      url =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70c542e25de0efde7b21b84e9681ab5e";
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedie") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };

  const searchMovie = (evn) => {
    if (evn.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=70c542e25de0efde7b21b84e9681ab5e&query=" +
        search;
      setUrl(url);
      setSearch("");
    }
  };

  return (
    <>
      <div className="header bg-[var(--secondary-color)] h-[100px] w-full flex justify-around items-center mb-[30px]">
        <nav>
          <ul className="list flex gap-3">
            {arr.map((value) => {
              return (
                <li>
                  <a
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                    className="text-white text-xl font-bold p-2 focus:bg-[var(--primary-color)] focus:opacity-[0.2px] focus:rounded-[20px]"
                    href="#"
                    name={value}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form>
          <div className="flex">
            <input
              className="input-btn outline-none border-[var(--primary-color)] rounded-md p-1 mr-3 bg-[var(--primary-color)] text-white"
              type="text"
              placeholder="Enter movie name..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyDown={searchMovie}
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="container gap-5">
        {movieData.length == 0 ? (
          <p className="notFound text-5xl font-bold">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
}

export default Main;
