import React from "react";
import NoNetwork from "../../assets/network-signal.png";
export default function Offline() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="offline flex flex-col justify-center items-center p-3">
        <img src={NoNetwork} className="w-[250px]" alt="" />
        <h1 className="text-2xl text-center">No Internet Connection</h1>
        <p className="text-xl text-secfont py-2 text-center">
          Check your internet connection and try again.
        </p>
      </div>
    </section>
  );
}
