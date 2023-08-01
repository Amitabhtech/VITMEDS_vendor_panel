import { useState } from "react";
import { ChevronRightIcon, EyeIcon } from "@heroicons/react/solid";
import OrderDetailsDialog from "@/components/Dialogs/OrderDeatilsDialog";

const data = [
  {
    id: 1,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
  {
    id: 2,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
  {
    id: 3,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
];

function OrderManagementTable({ tableData = data, setTableData }) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");

  const handleDeleteClick = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  return (
    <>
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
                Order management
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <table className="w-full mt-10  border-collapse border border-t-0 bg-white rounded-t-xl">
        <thead className="rounded-t-md">
          <tr className="bg-gray-200 bg-opacity-50 text-left rounded-t-md">
            <th className=" p-1 text-xs md:text-base md:p-2 rounded-tl-xl">
              S No.
            </th>
            <th className=" p-1 text-xs md:text-base md:p-2">User Name</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Payment ID</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Product</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Date</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Price</th>
            <th className="flex justify-center p-1 text-xs md:text-base md:p-2 rounded-tr-xl">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={row.id} className={`hover:bg-gray-50`}>
              <td className=" p-1 text-xs md:text-base md:p-2">{index + 1}</td>
              <td className="font-semibold p-1 text-xs md:text-base md:p-2">
                {row.name}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.paymentId}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.product}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.date}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 ">{row.price}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 flex justify-center">
                <button
                  onClick={() => {
                    setOn(true);
                    setCurrentRow(row.id);
                  }}
                  className="rounded-sm p-1 bg-blue-100"
                >
                  <EyeIcon className="w-5 h-5 text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {on && <OrderDetailsDialog on={on} setOn={setOn} />}
    </>
  );
}

export default OrderManagementTable;
