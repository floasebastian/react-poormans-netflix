import React, { Component } from "react";
import Movie1 from "../../img/Movie2.jpg";
import { Info } from "./Info";
import { apiUrlImgSm } from "../../Constants";
import { BtnBookmark } from "../Buttons/Btn_Bookmark";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowBookmarkBtn: false,
    };
  }

  onHoverCard = () => {
    this.setState({ ShowBookmarkBtn: !this.state.ShowBookmarkBtn });
  };

  getGenre = () => {
    let name;
    this.props.genrelist.forEach((e) => {
      if (e.id == this.props.genre[0]) {
        name = e.name;
      }
    });
    return name;
  };

  render() {
    return (
      <div
        className="min-h-[210] aspect-[3/4] overflow-hidden group relative font-bold transition-all hover:cursor-pointer"
        onMouseEnter={this.onHoverCard}
        onMouseLeave={this.onHoverCard}
      >
        <Link to={`/movie/${this.props.id}`}>
          <div
            style={{
              "--image": `url(${apiUrlImgSm + this.props.poster})`,
              height: "100%",
              width: "100%",
            }}
            className=" absolute bg-[image:var(--image)] bg-cover group-hover:scale-125 duration-300"
          ></div>
          <div
            className="bg-gradient-to-t from-gray-800 h-28 w-full absolute bottom-0 left-0 duration-500
          group-hover:scale-90 group-hover:blur-lg group-hover:bg-gray-700
        "
          ></div>
          <div>
            <div className="absolute bottom-0 left-0 p-4 text-white float self-center group-hover:bottom-5 group-hover:left-3 duration-500">
              <div className="flex gap-4 mb-2">
                {/* {this.props.genre.map(gnr => {
                for (let i = 0; i < this.props.genrelist.length; i++) {
                  if (gnr == this.props.genrelist[i].id) {
                    <Info info={this.props.genrelist[i].name} />;
                  }
                }
              })} */}
                <Info info={this.getGenre()} className={'text-xs'}/>
                <Info info={this.props.releaseDate} className={'text-xs'} />
              </div>
              <span>{this.props.title}</span>
            </div>
          </div>
        </Link>
        <div className="absolute right-0 top-0 p-2">
          <BtnBookmark hidden={!this.state.ShowBookmarkBtn} />
        </div>
      </div>
    );
  }
}

// export const Card = ({ title, releaseDate, poster }) => {
//   let ShowBookmarkBtn = false;

//   const onHoverCard = () => {
//     ShowBookmarkBtn = !ShowBookmarkBtn;
//     console.log(ShowBookmarkBtn);
//   };

//   return (
//     <div
//       className="aspect-[3/4] overflow-hidden group relative font-bold transition-all"
//       onMouseEnter={onHoverCard}
//       onMouseLeave={onHoverCard}
//     >
//       <div
//         style={{
//           "--image": `url(${apiUrlImgSm + poster})`,
//           height: "100%",
//           width: "100%",
//         }}
//         className="bg-[image:var(--image)] bg-cover group-hover:scale-125 duration-300"
//       ></div>
//       <div
//         className="bg-gradient-to-t from-gray-800 h-28 w-full absolute bottom-0 left-0 duration-500
//         group-hover:scale-90 group-hover:blur-lg group-hover:bg-gray-700
//       "
//       ></div>
//       <div>
//         <div className="absolute right-0 top-0 p-2">
//           {ShowBookmarkBtn &&
//             <BtnBookmark />
//             }
//         </div>
//         <div className="absolute bottom-0 left-0 p-2 text-white float self-center group-hover:bottom-5 group-hover:left-3 duration-500">
//           <div className="flex gap-4 mb-2">
//             <Info info="Movie" />
//             <Info info={releaseDate} />
//           </div>
//           <span>{title}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
