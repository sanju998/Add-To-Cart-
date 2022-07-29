import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
function AddToCart() {
  return (
    <>
      <div className=" AddToCart-main-div bg-white p-4">
        <div className="cart-item-text fw-bold"> Cart Items</div>
        <div className="d-flex align-items-center justify-content-between fw-semibold">
          <div className="">Ice Cream</div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <button className="card-button text-center border-0 incr-decr-button rounded-2 ">
              <AiOutlineMinus />
            </button>
            <button className="card-button text-center border-0 incr-decr-button ms-2 rounded-2">
              <AiOutlinePlus />
            </button>
          </div>
          <div>2*$100.00</div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>Items Price</div>
          <div>$100.00</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Tax Price</div>
          <div>$120.00</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Shipping Price</div>
          <div>$0.00</div>
        </div>
        <div className="d-flex align-items-center justify-content-between fw-bold">
          <div>Total Price</div>
          <div>$0.00</div>
        </div>
        <hr />
        <div>
          <button className="card-button w-100 text-center border-0 p-2">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
