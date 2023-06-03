import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();

  console.log(router.query.id);
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
        </ol>
      </nav>
      {/* ---------------------PRODUCT HEAD------------------ */}
      <div className="w-full grid md:grid-cols-10 gap-4 bg-white">
        <div className="w-full md:col-span-6 flex justify-center items-center flex-col">
          <img src={"/images/p01.png"} />
          <div className="my-5 w-full flex justify-between">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <img src={"/images/p01.png"} className="w-20 h-20" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col col-span-4 py-3">
          <div className="w-full flex justify-between">
            <div className="w-11/12 text-xl font-semibold text-gray-800">
              Inlife Natural Vitamin C + Zinc 1000 mg Tablet - Orange Flavour
              60's
            </div>
            <div>
              <HeartIcon className="h-7 w-7 text-gray-400" />
            </div>
          </div>
          <div className="w-full flex space-x-3 items-center">
            {["Fitness", "Vitamins and Suppliments"].map((item, index) => (
              <div
                className="px-2 py-1 mt-2 rounded-md bg-gray-200 text-gray-800 flex justify-center items-center"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-gray-300 mt-5"></div>
          {/* PRICE AND COUPONS  */}
          <div>
            <div className="mt-2 text-gray-600 text-lg font-semibold">
              Best Price*
            </div>
            <div className="flex space-x-4 itemms-center">
              <div className="text-2xl text-pink-500 font-semibold">
                ₹ 657.66
              </div>
              <div className="text-2xl text-gray-500 line-through font-semibold">
                ₹ 657.66
              </div>
            </div>
            {/* TERMS AND CONDITIONs */}
            <ul className="mt-4 text-gray-400 text-sm">
              <l1 className="block">(Inclusive all taxes)</l1>
              <l1 className="block">
                * This product cannot be returned for a refund or exchange.
              </l1>
              <l1 className="block">
                * This product cannot be returned for a refund or exchange.
              </l1>
              <l1 className="block">* Mkt: Inlife Pharma Private Limited</l1>
              <l1 className="block">* Country of Origin: India</l1>
              <l1 className="block">
                * Delivery charges if applicable will be applied at checkout
              </l1>
            </ul>
            {/* ADD TO CART BUTTON */}
            <div className="w-60 mt-5">
              <Link href={"/cart"}>
                <PrimaryButton text={"Add to cart"} color={"bg-indigo-600"} />
              </Link>
            </div>
            {/* SKU CATEGORIES SECTION */}
            <div className="mt-2">
              <div className="">
                <span className="font-semibold">SKU :</span> LNF45AS1
              </div>
              <div className="">
                <span className="font-semibold">Categories :</span> Allopathy,
                Equipments
              </div>
              <div className="">
                <span className="font-semibold">Availability :</span> In Stock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
