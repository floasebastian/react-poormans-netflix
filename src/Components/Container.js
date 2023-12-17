import React, { Component, useEffect, useState } from "react";
import { apiKey, apiUrl, apiUrlGenre } from "../Constants";
import { ThemeWrapper } from "./Wrapper";
import Card from "./Card/Card";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      genres: [],
      isLoading: true
    };
  }

  //fetch movie data
  getMovieList() {
    this.setState({isLoading:true});
    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resData) => {
        this.setState({ data: resData.results });
        this.setState({isLoading:false});
      });
  }

  //fetch movie genres list
  getGenreList() {
    fetch(`${apiUrlGenre}?api_key=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resData) => {
        this.setState({ genres: resData.genres });
      });
  }

  componentDidMount() {
    this.getMovieList();
    this.getGenreList();
  }

  render() {
    const { data, genres } = this.state;
    return (
      <ThemeWrapper isLoading={this.state.isLoading} className="md:mb-10">
        {data.length > 0 && genres.length > 0 && (
          <div
            className="m-5 font-inter grid grid-cols-2 gap-4                          // <<< default screen. or < sm && > xl || below is for sm to xl
            xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 lg:gap-2 md:gap-4
            xl:m-10
            "
          >
            {data.map((dt) => {
              return (
                <Card
                  id={dt.id}
                  title={dt.title}
                  poster={dt.poster_path}
                  releaseDate={dt.release_date.split("-")[0]}
                  genre={dt.genre_ids}
                  genrelist={genres}
                  key={dt.id}
                />
              );
            })}
          </div>
        )}
      </ThemeWrapper>
    );
    // return <div>{!isLoading && data && <Grid data={data} />}</div>;
  }
}

//functional component
// export const Container = () => {
//     const [data, setData] = useState();
//     let GridComponent;

//     useEffect(() => {
//       fetch(`${apiUrl}?api_key=${apiKey}`)
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//         })
//         .then((resData) => {
//           setData(resData.results);
//         });
//     }, []);

//     return (
//       <div>
//         {
//           data &&
//           <Grid data={data}/>
//           }
//       </div>
//     );
//   };
