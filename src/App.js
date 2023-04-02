import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import NavBar from './NavBar';
function App() { 
  return (
    <main>
      <NavBar />
      <Banner />
      <Row title="Popular on Netflix" fetchURL={requests.fetchTrending} rowType="regular"/>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} rowType="netflixOriginals"/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}  rowType="regular"/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} rowType="regular"/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} rowType="regular"/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} rowType="regular" />
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries} rowType="regular"/>
    </main>
  )
}

export default App;
