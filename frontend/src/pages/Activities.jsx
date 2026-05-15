import { useState } from "react";
import { Button } from "flowbite-react";

import {
  useQuery
} from "@tanstack/react-query";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import ActivityForm from "../components/ActivityForm";
import ActivityTable from "../components/ActivityTable";

import {
  getActivities
} from "../services/api";

function Activities() {

  // Modal state
  const [openModal, setOpenModal] =
    useState(false);

  // Fetch activities
  const {
    data: activities,
    isLoading,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main */}

       <div className="flex-1 p-6 md:ml-0 mt-16 md:mt-0">

          <Navbar />

          {/* Header */}

          <div className="flex justify-between items-center mt-6">

            <div>

              <h1 className="text-3xl font-bold">
                Activities
              </h1>

              <p className="text-gray-500">
                Manage student activities
              </p>

            </div>

            {/* Add Button */}

            <Button
              onClick={() =>
                setOpenModal(true)
              }
            >
              Add Activity
            </Button>

          </div>

          {/* Table */}

          <div className="mt-6">

            {
              isLoading ? (

                <div className="text-center font-semibold">
                  Loading...
                </div>

              ) : (

                <ActivityTable
                  activities={activities}
                />

              )
            }

          </div>

        </div>

      </div>

      {/* MODAL */}
      {/* CUSTOM MODAL */}

{
  openModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-2xl font-bold">
            Add New Activity
          </h2>

          <button
            onClick={() =>
              setOpenModal(false)
            }
            className="text-gray-500 text-2xl"
          >
            ×
          </button>

        </div>

        {/* Form */}

        <ActivityForm
          closeModal={() =>
            setOpenModal(false)
          }
        />

      </div>

    </div>
  )
}

  

    </div>
  );
}

export default Activities;