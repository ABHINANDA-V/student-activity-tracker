function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="flex">

        {/* Sidebar */}

        <div className="w-64 bg-gray-900 text-white min-h-screen p-5 hidden md:block">

          <h1 className="text-2xl font-bold mb-10">
            Tracker
          </h1>

          <ul className="space-y-4">

            <li className="hover:text-blue-400 cursor-pointer">
              Dashboard
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Activities
            </li>

            <li className="hover:text-red-400 cursor-pointer">
              Logout
            </li>

          </ul>

        </div>

        {/* Main Content */}

        <div className="flex-1 p-6">

          <div className="bg-white rounded-2xl shadow p-5">

            <h1 className="text-3xl font-bold">
              Welcome {user?.username}
            </h1>

            <p className="text-gray-500 mt-2">
              Student Activity Tracker Dashboard
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;