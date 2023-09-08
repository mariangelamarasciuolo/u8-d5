import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FilmListTre extends Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    this.BreakingBad();
  };

  BreakingBad = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2e445e77&s=breaking%20bad");
      const data = await response.json();
      const BreakingBad = data.Search;
      console.log(data.Search);
      this.setState({ films: BreakingBad });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container-fluid px-4 mx-3">
        <h4 className="d-flex justify-content-start">New Releases</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters"
          style={{ overflow: "hidden" }}
        >
          {this.state.films.map((film) => {
            return (
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid d-flex "
                  style={{ height: "20em", width: "18em" }}
                  src={film.Poster}
                  alt="filmImg"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FilmListTre;
