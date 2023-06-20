import React from "react";
import { loader } from "./Navbar";

export default function Spinner() {
  return (
    <div className="text-center">
      <img
        className=""
        src={loader}
        alt="loading"
        style={{ margin: "-60px 0px" }}
      />
    </div>
  );
}
