import { FaChartBar, FaClipboardList, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] =useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {/* mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-blue-900 shadow z-40 p-4 flex items-center">

        <button
          onClick={() =>
            setOpenSidebar(true)
          }
          className="text-2xl text-white"
        >
          <FaBars />
        </button>

        <h1 className="ml-4 text-xl font-bold text-white">
          Tracker
        </h1>
      </div>

      {
        openSidebar && (
          <div
            onClick={() =>
              setOpenSidebar(false)
            }
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

        )
      }

      {/* sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 bg-blue-900 text-white min-h-screen p-5
          shadow-2xl
          transform transition-transform duration-300
          ${openSidebar
            ? "translate-x-0"
            : "-translate-x-full"
          }
          md:translate-x-0
        `}
      >

        {/* header */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-3xl font-bold tracking-wide">
            Tracker
          </h1>

          {/* close button */}
          <button
            onClick={() =>
              setOpenSidebar(false)
            }
            className="md:hidden text-2xl text-white"
          >
            <FaTimes />
          </button>

        </div>

        {/* menu */}
        <ul className="space-y-4">
          <li
            onClick={() => {
              navigate("/dashboard");
              setOpenSidebar(false);
            }}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600 transition-all duration-200 cursor-pointer font-medium"
          >
            <FaChartBar />  Dashboard
          </li>

          <li
            onClick={() => {
              navigate("/activities");
              setOpenSidebar(false);
            }}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600 transition-all duration-200 cursor-pointer font-medium"
          >
            <FaClipboardList /> Activities
          </li>

          <li
            onClick={logout}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500 transition-all duration-200 cursor-pointer font-medium"
          >
            <FaSignOutAlt />
           Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;