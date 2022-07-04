import React from "react";

export default function Card(props) {
  return (
    <div className="flex  w-96   lg:w-[36rem] bg-slate-100 p-5 m-5 justify-around md:w-[36rem] rounded items-center">
      <div>
        <img
          className="w-80 h-56 object object-cover rounded-sm"
          src={props.image}
          alt="img"
        />
      </div>

      <div className="flex flex-col pl-5 justify-start items-start">
        <h1 className="text-3xl text-slate-900 m-5">{props.name}</h1>
        <p className="m-5 text-xl text-slate-900">{props.price}</p>
        <button
          onClick={props.setTicket}
          className="text-lg m-5 w-20 shadow-sm shadow-slate-900 hover:bg-slate-800 transition-all text-center  rounded bg-slate-900 text-slate-300 h-10 "
        >
          Ticket
        </button>
      </div>
    </div>
  );
}
