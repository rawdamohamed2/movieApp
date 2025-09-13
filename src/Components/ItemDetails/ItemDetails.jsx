import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import ItemHeader from "./ItemHeader/ItemHeader";
import SimilarItems from "./SimilarItems/SimilarItems";
import Loader from "../Loader/Loader";
import NotFound from "../../assets/notFoundp.jpg";
import { MessageContext } from "../../Context/Messagecontext";

/**
 * ItemDetails
 *
 * This component fetches the details of a movie or TV show
 * based on the id provided in the URL parameters.
 * It displays the details of the item, its cast, and similar items.
 * If there is an error while fetching the data, it displays an error message.
 * If the item is not found, it displays a message saying that no details are found about the item.
 *
 * @param {Object} items - the details of the item
 * @param {boolean} itemsloading - whether the data is still being fetched
 * @param {boolean} error - whether there is an error while fetching the data
 * @param {Object} cast - the cast of the item
 * @param {boolean} castloading - whether the cast data is still being fetched
 * @param {boolean} casterror - whether there is an error while fetching the cast data
 * @param {Object} similar - the similar items
 * @param {boolean} similarloading - whether the similar items data is still being fetched
 * @param {boolean} similarerror - whether there is an error while fetching the similar items data
 * @param {string} media_type - the type of the item (movie or TV show)
 */

export default function ItemDetails() {
  let { id, media_type } = useParams();

  let { showMessage } = useContext(MessageContext);
  let {
    item: items,
    loading: itemsloading,
    error,
  } = useApi(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );
  let {
    item: cast,
    loading: castloading,
    error: casterror,
  } = useApi(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );
  let {
    item: similar,
    loading: similarloading,
    error: similarerror,
  } = useApi(
    `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US&page=1`
  );

  let itemsImage = items.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${items.backdrop_path}`
    : items.poster_path
    ? `https://image.tmdb.org/t/p/original/${items.poster_path}`
    : items.profile_path
    ? `https://image.tmdb.org/t/p/original/${items.profile_path}`
    : NotFound;

  if (itemsloading || castloading || similarloading) return <Loader />;
  error &&
    casterror &&
    similarerror &&
    showMessage(error || casterror || similarerror);
  if (error || casterror || similarerror)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );
  return (
    <div className="min-h-[110dvh] w-full flex flex-col xl:items-end items-center  lg:pt-0 pt-[100px]">
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
    </div>
  );
}
