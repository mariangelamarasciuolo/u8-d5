import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import FilmList from "./components/FilmList";

function App() {
  return (
    <div className="App bg-dark text-light">
      <TopBar />
      <Jumbo />
      <FilmList movieTitle="harry%20potter" />
      <FilmList movieTitle="fast%20furious" />
      <FilmList movieTitle="breaking%20bad" />

      <Footer />
    </div>
  );
}

export default App;
