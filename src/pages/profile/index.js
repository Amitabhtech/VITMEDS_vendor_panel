import Feedback from "@/components/Feedback";
import Legal from "@/components/Legal";
import Overview from "@/components/Overview";
import Support from "@/components/Support";
import Wallet from "@/components/Wallet";
import OrderManagement from "@/components/orderManagement";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      {/* BREAD CRUM */}
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
                Profile
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* --------HEADER------------ */}
      {tab === 1 && (
        <div className="p-4 bg-white shadow-lg mt-5 flex items-center space-x-6 rounded-lg relative">
          <img src={"/images/image 8.png"} className="h-40 rounded-lg" />
          <div>
            <div className="text-2xl text-gray-700">Good Morning,</div>
            <div className="text-4xl text-bluePrimary mb-2 font-bold tracking-wide">
              Drug Store
            </div>
            <div className="text-sm text-gray-500 max-w-md">
              Great doctor if you need your family member to get effective
              immediate ssistance, emergency treatment or a simple consultation.
            </div>
          </div>
          <img src={"/images/bg1.png"} className="absolute right-0 top-0" />
        </div>
      )}

      {/* --------TABS------------ */}
      <div className="flex space-x-5 items-center my-5">
        <div
          className={
            tab === 1
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(1)}
        >
          <div>Overview</div>
          {tab === 1 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        <div
          className={
            tab === 2
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(2)}
        >
          <div>Wallets</div>
          {tab === 2 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        <div
          className={
            tab === 3
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(3)}
        >
          <div>Feedback</div>
          {tab === 3 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        <div
          className={
            tab === 4
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(4)}
        >
          <div>Order Management</div>
          {tab === 4 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        <div
          className={
            tab === 5
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(5)}
        >
          <div>Service Level Agreement</div>
          {tab === 5 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        <div
          className={
            tab === 6
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(6)}
        >
          <div>Support</div>
          {tab === 6 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
      </div>

      {/* CONTENT ACCORDING TO THE ACTIVE TAB */}
      <div className="w-full">
        {tab === 1 ? (
          <Overview />
        ) : tab === 2 ? (
          <Wallet />
        ) : tab === 3 ? (
          <Feedback />
        ) : tab === 4 ? (
          <OrderManagement />
        ) : tab === 5 ? (
          <Legal />
        ) : (
          <Support />
        )}
      </div>
    </div>
  );
};

export default Profile;
