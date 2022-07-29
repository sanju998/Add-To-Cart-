import React from "react";
import "../App.css";

function CardComponet(props) {
  return (
    <>
      <div className="custom-card bg-white">
        <div className="card-image">
          <img src={props.img} className=" w-100" alt="" />
        </div>
        <div className="card-content px-2 py-2 ">
          <div className="title-card ">{props.title}</div>
          <div className="texts-card my-2 ">{props.texts}</div>
          <div className="fw-bolder my-3 card-price-text">
            <span>{props.currency}</span>
            {props.price}
          </div>
          <button className="card-button w-100 text-center border-0 p-2 fw-semibold ">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CardComponet;
