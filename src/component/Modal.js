import React from "react";

export default function Modal(props) {
  return (
    <div className="flex backdrop-blur-3xl fixed left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] p-10  justify-center items-center flex-col w-80 h-72 bg-slate-900 ">
      <h1 className="text-slate-50 text-3xl m-5 ">
        oops <span className="text-3xl text-red-600">!</span>
      </h1>
      <h4 className="text-slate-50 text-lg m-5">
        Sorry, You can't buy tickets now
      </h4>
      <button
        onClick={props.cancel}
        className="text-lg m-5 w-20 shadow-sm shadow-slate-900 hover:bg-slate-200 transition-all text-center  rounded bg-slate-50 text-slate-900 "
      >
        Cancel
      </button>
    </div>
  );
}
