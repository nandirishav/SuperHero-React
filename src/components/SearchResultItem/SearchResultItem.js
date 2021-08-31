import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = (props) => {
  const { data } = props;
  //   console.log("data", data);
  return (
    <div className="results-card">
      <img className="search-result-card-image" src={data.image.url} alt="" />
      <div className="result-card-container">
        <div>{data.name}</div>
        <Link className="powers-button" to="/details">
          Know my SuperPowers
        </Link>
        <Link className="favourites-button" to="/favourites">
          Add to Favourites
        </Link>
        {/* <div className="favourites-button">Add to Favourites</div> */}
      </div>
    </div>
  );
};

export default SearchResultItem;
