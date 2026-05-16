import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addActivity } from "../services/api";

function ActivityForm({ closeModal }) {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    hours: "",
  });

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // mutation
  const mutation = useMutation({
    mutationFn: addActivity,

    onSuccess: () => {
      toast.success("Activity added successfully");

      queryClient.invalidateQueries({
        queryKey: ["activities"],
      });

      queryClient.invalidateQueries({
        queryKey: ["summary"],
      });

      setFormData({
        name: "",
        activity: "",
        hours: "",
      });

      closeModal();
    },

    onError: () => {
      toast.error("Failed to add activity");
    },
  });

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.activity || !formData.hours) {
      toast.error("Please fill all fields");
      return;
    }

    mutation.mutate({
      ...formData,
      hours: Number(formData.hours),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border-2 border-blue-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />


      <input
        type="text"
        name="activity"
        placeholder="Activity"
        value={formData.activity}
        onChange={handleChange}
        className="w-full border-2 border-blue-500 shadow-sm rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        name="hours"
        placeholder="Hours"
        value={formData.hours}
        onChange={handleChange}
        className="w-full border-2 border-blue-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />


      <div className="flex justify-end gap-3 pt-3">
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          {mutation.isPending ? "Saving..." : "Save Activity"}
        </button>
      </div>
    </form>
  );
}

export default ActivityForm;
