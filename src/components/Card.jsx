import React from "react";
function Card(movie) {
  console.log(movie.info);
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="card lg:card-side h-[250px] w-[500px] bg-[var(--secondary-color)] shadow-xl">
        <figure>
          <img
          className="h-full w-[250px]"
            src={img_path+movie.info.poster_path}
            alt="Album"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title">{movie.info.title}</h2>
          <h3 className="m-0 h-o">Rating: {movie.info.vote_average}</h3>
          <h3>Popularity: <span>{movie.info.popularity}</span></h3>
          <h3>Language: <span>{movie.info.original_language}</span></h3>
          <h3>Year: <span>{movie.info.release_date}</span></h3>
        </div>
      </div>
      {/* <div className="cards w-[260px] bg-[var(--secondary-color)] shadow-xl hover:">
        <figure>
          <img src={img_path+movie.info.poster_path} className="h-[260px] w-full object-cover  " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.info.title}</h2>
          <p className="">
            Rate: <span>{movie.info.vote_average}</span>
          </p>
          <div className="">
          <h3>
            Year: <span>{movie.info.release_date}</span>
          </h3>
          <p>
            Overview: <span>{movie.info.overview}</span>
          </p>
          </div>
          
        </div>
      </div> */}
    </>
  );
}

export default Card;
