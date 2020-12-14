import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import "./Row.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      {/* banner */}
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIE" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIE" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMANCE MOVIE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="HORROR MOVIE" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
