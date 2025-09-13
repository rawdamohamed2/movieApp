import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import Peopleheader from "./Peopleheader/Peopleheader";
import PeopleDetails from "./PeopleDetails/PeopleDetails";
import Loader from "../Loader/Loader";
import { MessageContext } from "../../Context/Messagecontext";
export default function People() {
  let { id } = useParams();
  const { showMessage } = useContext(MessageContext);
  const {
    item: items,
    loading: itemsloading,
    error,
  } = useApi(
    `https://api.themoviedb.org/3/person/${id}?api_key=01672aea203f4a08b7d92c56e3461b0e`
  );
  if (itemsloading) return <Loader />;
  error && showMessage(error);
  if (error)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );

  return (
    <section className="min-h-dvh">
      <div className="container mx-auto">
        <Peopleheader item={items} itemloading={itemsloading} />
        <PeopleDetails id={id} />
      </div>
    </section>
  );
}
