import React from "react";

export default function Btn(props) {
  return (
    <div className="flex  w-96  justify-around p-10 lg:flex-nowrap lg:w-auto sm:w-[40rem] md:flex-nowrap flex-wrap ">
      <button
        onClick={props.setAll}
        className="text-lg w-28 shadow-sm shadow-slate-900 hover:bg-slate-800 transition-all text-center rounded bg-slate-900 text-slate-300 h-14 m-5"
      >
        All
      </button>
      <button
        onClick={props.setAsia}
        className="text-lg w-28 shadow-sm shadow-slate-900 hover:bg-slate-800 transition-all text-center  rounded bg-slate-900 text-slate-300 h-14 m-5"
      >
        Asia
      </button>
      <button
        onClick={props.setEurope}
        className="text-lg w-28 shadow-sm shadow-slate-900 hover:bg-slate-800 transition-all text-center  rounded bg-slate-900 text-slate-300 h-14 m-5"
      >
        Europe
      </button>
      <button
        onClick={props.setAfrica}
        className="text-lg w-28 shadow-sm shadow-slate-900 hover:bg-slate-800 transition-all text-center  rounded bg-slate-900 text-slate-300 h-14 m-5"
      >
        Africa
      </button>
    </div>
  );
}
