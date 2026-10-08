import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import PeopleHeader from "../../Components/People/PeopleHeader.jsx";
import PeopleDetails from "../../Components/People/PeopleDetails.jsx";
import Loader from "../../Components/Loader/Loader";
import { MessageContext } from "../../Context/Messagecontext";
export default function People() {
  let { id } = useParams();
  const { showMessage } = useContext(MessageContext);
  const {
    data: items,
    isPending: itemsloading,
    error,
  } = useApi(`https://api.themoviedb.org/3/person/${id}?`);
  if (itemsloading) return <Loader />;
  error && showMessage(error);
  if (error)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );

  return (
    <main className="min-h-dvh">
      <div className="container mx-auto">
        <PeopleHeader item={items} itemloading={itemsloading} />
        <PeopleDetails id={id} />
      </div>
    </main>
  );
}
