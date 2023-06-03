import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

const Cart = () => {
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
          <div className="text-lg font-semibold text-gray-800 mb-2">PRODUCTS</div>
          {/* <div className="h-px w-full bg-gray-300 my-2"></div> */}
          {[1, 2, 3].map((item, index) => (
            <div className="w-full flex space-x-3 items-center p-3 border-y">
                  <img className="h-14" src={"/images/p01.png"} />
                  <div>
                      
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
