import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function Chart(props) {
  const data=(props.firstCardData * 100) + (props.secondCardData * 50) + (props.thirdCardData * 10)

  const [total, setTotal] = useState()

  return (
    <div>
      <div className=" cart-main-div bg-white p-4">
        <div className="cart-item-text fw-bold mb-2"> Cart Items</div>
        {props.firstCardData>0?<div className="d-flex align-items-center justify-content-between fw-semibold">
          <div className="">Ice Cream</div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <button className="card-button text-center border-0 incr-decr-button rounded-2 " onClick={() => props.setFirstCardData(props.firstCardData - 1)}>
              <AiOutlineMinus />
            </button>
            <button className="card-button text-center border-0 incr-decr-button ms-2 rounded-2" onClick={() => props.setFirstCardData(props.firstCardData + 1)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div>{props.firstCardData}*$100.00</div>
        </div>:null}
        {props.secondCardData>0?<div className="d-flex align-items-center justify-content-between fw-semibold my-3" >
          <div className="">Ice Cream 2</div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <button className="card-button text-center border-0 incr-decr-button rounded-2 " onClick={() => props.setSecondCardData(props.secondCardData - 1)}>
              <AiOutlineMinus />
            </button>
            <button className="card-button text-center border-0 incr-decr-button ms-2 rounded-2" onClick={() => props.setSecondCardData(props.secondCardData + 1)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div>{props.secondCardData}*$50.00</div>
        </div>:null}

       {props.thirdCardData>0? <div className="d-flex align-items-center justify-content-between fw-semibold">
          <div className="">Ice Cream Cone
          </div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <button className="card-button text-center border-0 incr-decr-button rounded-2 " onClick={() => props.setThirdCardData(props.thirdCardData - 1)}>
              <AiOutlineMinus />
            </button>
            <button className="card-button text-center border-0 incr-decr-button ms-2 rounded-2" onClick={() => props.setThirdCardData(props.thirdCardData + 1)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div>{props.thirdCardData}*$10.00</div>
        </div>:null}
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>Items Price</div>
          <div>${data}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Tax Price</div>
          <div>${(data*10)/100}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Shipping Price</div>
          <div>$0.00</div>
        </div>
        <div className="d-flex align-items-center justify-content-between fw-bold">
          <div>Total Price</div>
          <div>${((data*10)/100)+data}</div>
        </div>
        <hr />
        <div>
          <button className="card-button w-100 text-center border-0 p-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
