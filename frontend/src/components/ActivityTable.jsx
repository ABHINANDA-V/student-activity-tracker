import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteActivity } from "../services/api";
import { useState } from "react";

function ActivityTable({ activities }) {

  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const mutation = useMutation({
    mutationFn: deleteActivity,
    onSuccess: () => {
      toast.success(
        "Activity deleted successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });

      queryClient.invalidateQueries({
        queryKey: ["summary"],
      });

      setOpenModal(false);
    },

    onError: () => {

      toast.error(
        "Delete failed"
      );
    },
  });

 
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    mutation.mutate(selectedId);
  };

  return (

    <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-5 text-blue-500">
        Activities
      </h2>

      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-4 text-blue-900">
              Student
            </th>
            <th className="text-left p-4 text-blue-900">
              Activity
            </th>
            <th className="text-left p-4 text-blue-900">
              Hours
            </th>
            <th className="text-left p-4 text-blue-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {
            activities?.length > 0 ? (
              activities.map((item) => (
                <tr
                  key={item.id}
                  className="border-none shadow-sm"
                >

                  <td className="p-4">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.activity}
                  </td>

                  <td className="p-4">
                    {item.hours}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        handleDeleteClick(item.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  className="text-center p-5 text-gray-500"
                >
                  No activities found
                </td>

              </tr>
            )
          }

        </tbody>
      </table>


      {/*delete modal */}
      {
        openModal && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">

              <h2 className="text-2xl font-bold mb-3 text-blue-500">
                Delete Activity
              </h2>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this activity?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setOpenModal(false)
                  }
                  className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                  {
                    mutation.isPending
                      ? "Deleting..."
                      : "Delete"
                  }
                </button>
              </div>

            </div>
          </div>
        )
      }

    </div>
  );
}

export default ActivityTable;