import React from "react";
import "./Explore.css";
import Card from "./Card/Card";
import { exploreData } from "./Explore.data";

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore-title">
        <img src="Rec.png" width={36} height={26} alt="" />
        <div className="title-container">
          <h1>Explore & Learn</h1>
          <p>
            Dive into a range of cooking styles and techniques tailored to your
            interests
          </p>
        </div>
      </div>
      <div className="cards">
        {
          exploreData.map((data) => (
            <Card data={data} />
          ))
        }
      </div>
    </div>
  );
}
