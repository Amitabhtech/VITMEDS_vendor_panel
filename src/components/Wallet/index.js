import React from "react";
import WalletRecentActivities from "../WalletRecentActicities";

const Wallet = () => {
  return (
    <div>
      {" "}
      <div className="w-full px-5 flex flex-col md:flex-row  justify-between py-7 rounded-md shadow-md bg-white mt-5">
        <div className="flex-1">
          <div className="text-xl text-gray-500">Total balance</div>
          <div className="text-5xl my-4 font-semibold text-gray-800">
            ₹15,500.00
          </div>
          <div className="text-xl text-gray-500">Transfers daily</div>
        </div>
        <div>
          <button className="text-bluePrimary text-sm flex items-center justify-between space-x-2 border border-dashed border-bluePrimary rounded-md px-2 py-2 hover:border-double hover:font-semibold">
            <img src={"/images/addbank.svg"} className="w-7" />
            <div>Add Bank Account</div>
          </button>
        </div>
      </div>
      {/*RECENT ACTIVITY  */}
      <div className="mt-5">
        <WalletRecentActivities />
      </div>
    </div>
  );
};

export default Wallet;
