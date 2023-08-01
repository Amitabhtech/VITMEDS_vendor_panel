import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const router = useRouter();

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
                href="/support"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
              >
                Support
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="md:flex justify-between mt-5 items-center w-full ">
        <div className="text-2xl font-semibold">Support</div>
        <div>
          <button className="px-10 py-2 rounded-md bg-bluePrimary text-white">
            Create New Ticket
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-5">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            onClick={() => router.push("/chat")}
            className="cursor-pointer hover:shadow-xl p-3 rounded-md bg-white shadow "
          >
            <div className="flex justify-between items-center">
              <div className="text-green-500">#001</div>
              <div className="text-gray-500 text-sm">Yesterday</div>
            </div>
            <div className="text-gray-500 text-xs my-1">
              Ex enim quis aute proident ullamco anim incididunt ut ut.
              Excepteur duis sit consectetur ad velit cillum non adipisicing
              duis id nulla. Nulla elit sint ex ea proident qui cillum ea minim
              officia voluptate cupidatat anim. Qui incididunt laborum pariatur
              nulla commodo.
            </div>

            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <img src="/images/p01.png" className="w-14 h-14 rounded-md" />
              </div>
              <div className="bg-orange-400 px-4 py-1 rounded-full text-xs bg-opacity-40 font-semibold">
                Unresolved
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
