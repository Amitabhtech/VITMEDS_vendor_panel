import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import NewStaffDialog from "../../components/Dialogs/NewStaffDialog";
import StaffTable from "../../components/Tables/StaffTable";

const StaffManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [staff, setStaff] = useState([
    { id: 1, name: "John Doe", role: "Doctor", phone: "6370882401" },
    { id: 2, name: "Jane Smith", role: "Nurse", phone: "9463253030" },
    { id: 3, name: "Bob Johnson", role: "Compounder", phone: "6370225415" },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleDeleteClick = () => {
    setStaff(staff.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
  };

  return (
    <div className="flex flex-col">
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
                Staff management
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex-1 w-full flex flex-col justify-center items-center py-10">
        {staff?.length > 0 ? (
          <div className="w-full">
            <div className="flex justify-end w-full mb-2 items-center space-x-3">
              {selectedIds.length > 0 && (
                <div className="w-40" onClick={handleDeleteClick}>
                  <PrimaryButton
                    text={"Delete Selected"}
                    color={"bg-red-500"}
                  />
                </div>
              )}
              <div className="w-40" onClick={() => setIsOpen(true)}>
                <PrimaryButton text={"Add New"} color={"bg-bluePrimary"} />
              </div>
            </div>
            <div className="w-full max-w-xs sm:max-w-none overflow-hidden">
              <StaffTable
                staff={staff}
                setStaff={setStaff}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            </div>
          </div>
        ) : (
          <div>
            <img src={"/images/staff1.svg"} />
            <div onClick={() => setIsOpen(true)}>
              <PrimaryButton text={"Add New"} color={"bg-bluePrimary"} />
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <NewStaffDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          staff={staff}
          setStaff={setStaff}
        />
      )}
    </div>
  );
};

export default StaffManagement;
