import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      {/* ------------BREADCRUMS------------------------- */}
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary dark:text-gray-400 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
              >
                Product Details
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
              >
                Cart
              </a>
            </div>
          </li>
        </ol>
      </nav>

      {/* ------------Page Heading---------------- */}
      <div className="text-gray-800 text-2xl font-bold my-5">Order Summary</div>

      {/* ----------SAVED ADDRESS CONTAINER----------- */}
      <div className="w-full p-3 bg-indigo-600 rounded-md flex justify-between items-center">
        <div className="text-white text-xl">Saved Addresses</div>
        <div className="w-60">
          <PrimaryButton
            text={"Enter delivery Pincode"}
            color={"bg-yellow-500"}
          />
        </div>
      </div>
      {/* ----------GRID CONTAINER---------- */}
      <div className="w-full grid md:grid-cols-10 gap-3 mt-3">
        <div className="md:col-span-7 bg-white shadow rounded-xl p-3">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            PRODUCTS
          </div>
          {/* <div className="h-px w-full bg-gray-300 my-2"></div> */}
          {[1, 2, 3].map((item, index) => (
            <div className="w-full flex space-x-3 items-center p-3 border-y">
              <img className="h-14" src={"/images/p01.png"} />
              <div className="w-full">
                <div className="text-base font-medium text-gray-800">
                  Scalpe Plus Anti Dandruff Shampoo 75 ml
                </div>
                <div className="text-sm font-normal text-gray-500">
                  Mfr: Glenmark Pharmaceuticals Ltd
                </div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex w-full space-x-4 itemms-center">
                    <div className="text-lg text-pink-500 font-semibold">
                      ₹ 657.66
                    </div>
                    <div className="text-lg text-gray-500 line-through font-semibold">
                      ₹ 657.66
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <button
                      className="text-lg text-gray-500 hover:scale-105 font-semibold"
                      onClick={() => {
                        if (quantity > 0) setQuantity(quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="w-16 border rounded-md text-center"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="text-lg text-gray-500 hover:scale-105 font-semibold"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center mt-2">
                  <div className="text-sm font-normal text-gray-500">
                    Delivery between FEB 5 - FEB 6
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-36">
                      <button
                        className={
                          "rounded-md text-gray-800 border w-full py-2 hover:bg-gray-300 "
                        }
                      >
                        Save it for later
                      </button>
                    </div>
                    <div className="w-24">
                      <button
                        className={
                          "rounded-md bg-pink-500 text-white w-full py-2 hover:bg-pink-700"
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
