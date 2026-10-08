import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import ItemHeader from "../../Components/ItemDetails/ItemHeader/ItemHeader";
import SimilarItems from "../../Components/ItemDetails/SimilarItems.jsx";
import Loader from "../../Components/Loader/Loader";
import NotFound from "../../assets/NotFound.png";
import { MessageContext } from "../../Context/Messagecontext.jsx";

export default function ItemDetailsPage() {
  let { id, media_type } = useParams();

  let { showMessage } = useContext(MessageContext);
  const {
    data: items,
    isPending: itemsloading,
    error,
  } = useApi(`https://api.themoviedb.org/3/${media_type}/${id}`);
  const {
    data: cast,
    isPending: castloading,
    error: casterror,
  } = useApi(`https://api.themoviedb.org/3/${media_type}/${id}/credits`);
  const {
    data: similar,
    isPending: similarloading,
    error: similarerror,
  } = useApi(`https://api.themoviedb.org/3/${media_type}/${id}/similar`);

  if (itemsloading || castloading || similarloading) return <Loader />;
  error &&
    casterror &&
    similarerror &&
    showMessage(error || casterror || similarerror);

  const itemsImage = items?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${items.backdrop_path}`
    : items?.poster_path
      ? `https://image.tmdb.org/t/p/original/${items.poster_path}`
      : items?.profile_path
        ? `https://image.tmdb.org/t/p/original/${items.profile_path}`
        : NotFound;
  if (error || casterror || similarerror)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );
  return (
    <main className="min-h-[110dvh] w-full flex flex-col xl:items-end items-center  lg:pt-0 pt-[100px]">
      <div
        className="absolute top-0 left-0 w-full h-[65dvh] bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${itemsImage})`,
        }}
      ></div>

      {items.length === 0 && cast.length === 0 && similar.length === 0 ? (
        <div className="container min-h-[110dvh] mt-[120px] mx-auto text-center w-full sm:p-9 flex flex-col  text-6xl font-bold justify-center items-center ">
          No details are found about item
        </div>
      ) : (
        <>
          <div className="container min-h-[110dvh] lg:mt-[0px] mt-[60px] w-full sm:py-9 flex flex-col lg:items-end justify-end items-center">
            <ItemHeader
              items={items}
              cast={cast}
              castloading={castloading}
              itemsloading={itemsloading}
              media_type={media_type}
            />
          </div>

          {similar.length === 0 ? (
            ""
          ) : (
            <div className="container w-full px-9">
              <SimilarItems
                similar={similar}
                similarloading={similarloading}
                media_type={media_type}
              />
            </div>
          )}
        </>
      )}
    </main>
  );
}
