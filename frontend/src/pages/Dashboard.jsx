import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-6">

          <Navbar />

          <div className="mt-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              <div className="bg-blue-600 text-white rounded-2xl p-6 shadow">

                <h2 className="text-lg">
                  Total Activities
                </h2>

                <p className="text-3xl font-bold mt-2">
                  0
                </p>

              </div>

              <div className="bg-green-600 text-white rounded-2xl p-6 shadow">

                <h2 className="text-lg">
                  Total Hours
                </h2>

                <p className="text-3xl font-bold mt-2">
                  0
                </p>

              </div>

              <div className="bg-purple-600 text-white rounded-2xl p-6 shadow">

                <h2 className="text-lg">
                  Most Active User
                </h2>

                <p className="text-2xl font-bold mt-2">
                  None
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;