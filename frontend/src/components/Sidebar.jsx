import {
  FaChartBar,
  FaClipboardList,
  FaSignOutAlt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (

    <div className="w-64 bg-gray-900 text-white min-h-screen p-5 hidden md:block">

      <h1 className="text-2xl font-bold mb-10">
        Tracker
      </h1>

      <ul className="space-y-5">

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaChartBar />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaClipboardList />
          Activities
        </li>

        <li
          onClick={logout}
          className="flex items-center gap-3 hover:text-red-400 cursor-pointer"
        >
          <FaSignOutAlt />
          Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;