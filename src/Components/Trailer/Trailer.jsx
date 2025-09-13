import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import useApi from "../../Hooks/useApi";
import { MessageContext } from "../../Context/Messagecontext";
import { useMediaQuery } from "react-responsive";

export default function Trailer() {
  const { showMessage } = useContext(MessageContext);

  let { type, id } = useParams();
  let {
    item: video,
    loading: videoloading,
    error,
  } = useApi(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );

  const isMobile = useMediaQuery({ minWidth: 576, maxWidth: 761 });
  const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1024 });
  const issmallMobile = useMediaQuery({ minWidth: 469, maxWidth: 577 });
  const isXSMobile = useMediaQuery({ maxWidth: 470 });
  let width = "800px";
  let hight = "400px";
  if (isMobile) {
    width = "550px";
    hight = "300px";
  } else if (isTablet) {
    hight = "500px";
    width = "700px";
  } else if (issmallMobile) {
    width = "450px";
    hight = "250px";
  } else if (isXSMobile) {
    width = "290px";
    hight = "200px";
  }

  let navigate = useNavigate();
  if (videoloading) return <Loader />;
  video = video ? video.filter((video) => video.type === "Trailer") : "";

  if (video.length == 0) {
    showMessage("Trailer Not Found");
    navigate(-1);
  }
  const handleClick = () => {
    navigate(-1);
  };
  error ? showMessage(error) : "";
  if (error)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );

  const url = `https://www.youtube.com/embed/${video[0].key}?autoplay=1&mute=1`;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center"
      onClick={handleClick}
    >
      <div className="absolute top-50 left-50 flex justify-center items-center bg-background z-50 md:p-5 p-2 rounded-xl">
        <div className="mx-auto w-fit ">
          <iframe
            width={width}
            height={hight}
            src={url}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
