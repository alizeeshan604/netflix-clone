import requests from './requests';
import './App.css';
import Row from './Row';
import Zrow from './Zrow';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      <Banner></Banner>
         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargerow={true}></Row>
        <Row title="TRENDING" fetchUrl={requests.fetchTrending} ></Row>
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} ></Row>
        <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} ></Row>
        <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} ></Row>
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} ></Row>  
    </div>
  );
}

export default App;
