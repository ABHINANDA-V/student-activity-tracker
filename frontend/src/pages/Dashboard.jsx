import {
  useQuery
} from "@tanstack/react-query";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import SummaryCards from "../components/SummaryCards";

import DashboardChart from "../components/DashboardChart";

import RecentActivities from "../components/RecentActivities";

import {
  getSummary,
  getActivities
} from "../services/api";

function Dashboard() {

  // Summary query
  const {
    data: summary,
    isLoading: summaryLoading,
  } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  // Activities query
  const {
    data: activities,
    isLoading: activitiesLoading,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });

  return (

    <div className="min-h-screen bg-purple-50">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex-1 p-6 md:ml-0 mt-16 md:mt-0">

          {/* Navbar */}

          <Navbar />

          {
            summaryLoading ||
            activitiesLoading ? (

              <div className="text-center mt-10 text-lg font-semibold text-purple-700">
                Loading...
              </div>

            ) : (

              <>

                {/* Summary Cards */}

                <div className="mt-6">

                  <SummaryCards
                    summary={summary}
                  />

                </div>

                {/* Bottom Section */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                  {/* Chart */}

                  <div className="lg:col-span-2">

                    <DashboardChart
                      activities={activities}
                    />

                  </div>

                  {/* Recent Activities */}

                  <div>

                    <RecentActivities
                      activities={activities}
                    />

                  </div>

                </div>

              </>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;