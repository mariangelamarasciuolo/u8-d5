import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import FilmList from "./components/FilmList";
import FilmListDue from "./components/FilmListDue";
import FilmListTre from "./components/FilmListTre";

function App() {
  return (
    <div className="App bg-dark text-light">
      <TopBar />
      <Jumbo />
      <FilmList />
      <FilmListDue />
      <FilmListTre />
      <Footer />
    </div>
  );
}

export default App;
