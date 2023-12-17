import React, { useEffect, useState } from "react";
import { ThemeWrapper } from "../Components/Wrapper";
import { useParams } from "react-router-dom";
import { apiUrlFindById, apiUrlImgSm } from "../Constants";
import { Info } from "../Components/Card/Info";
import { VideoPlayer } from "../Components/Player/VideoPlayer";

export const MovieDetail = (props) => {
  const params = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrlFindById(params.id))
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resData) => {
        setIsLoading(false);
        setData(resData);
      });
  }, []);

  //console.log(data);
  return (
    <ThemeWrapper isLoading={isLoading} className="p-5 md:p-10">
      {data && (
        <div>
          <div className="md:h-20 w-full md:flex md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <div className="flex gap-2 mt-2 text-base font-semibold">
                {data.genres.map((gnr) => {
                  return <Info key={gnr.id} info={gnr.name} />;
                })}
                <span>{data.release_date}</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 bg-slate-300 dark:bg-blue-900 rounded-md mt-2 mb-2 md:bg-transparent dark:md:bg-transparent">
              <div className="h-full w-25 p-2 justify-center text-center">
                <div>
                  <span className="">VOTE AVG.</span>
                </div>
                <div>
                  <span className="font-semibold text-3xl">
                    {data.vote_average}
                  </span>
                </div>
              </div>

              <div className="h-full w-25 p-2 justify-center text-center">
                <div>
                  <span className="">VOTE COUNT</span>
                </div>
                <div>
                  <span className="font-semibold text-3xl">
                    {data.vote_count}
                  </span>
                </div>
              </div>

              <div className="h-full w-25 p-2 justify-center text-center">
                <div>
                  <span className="">LANGUAGE</span>
                </div>
                <div>
                  <span className="font-semibold text-3xl">
                    {data.original_language}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto md:h-[1000] w-full grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2">
            <div className="col-span-1 relative aspect-[3/4] overflow-hidden mx-auto md:mx-0 p-2">
              <div
                style={{
                  "--image": `url(${apiUrlImgSm + data.poster_path})`,
                  height: "100%",
                  width: "100%",
                }}
                className="absolute bg-[image:var(--image)] bg-cover"
              ></div>
            </div>
            <div className="col-span-2 h-full w-full grid grid-rows-3 gap-y-2 p-3">
              <div className="row-span-2 h-full w-full">
                <VideoPlayer videoData={data.trailers.youtube[0].source} />
              </div>
              <div className="row-span-1 h-full w-full mt-5">
                <h1 className="font-bold">OVERVIEW:</h1>
                <span>{data.overview}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeWrapper>
  );
};
