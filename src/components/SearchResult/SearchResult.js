import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../../pages/Details";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import "./searchResult.css";

const SearchResult = (props) => {
  const { superheroData = [] } = props;
  // console.log("superherodata : ", superheroData);
  return (
    <>
      {superheroData.map((superhero) => (
        <SearchResultItem key={superhero.id} data={superhero} />
      ))}
    </>
  );
};

export default SearchResult;
