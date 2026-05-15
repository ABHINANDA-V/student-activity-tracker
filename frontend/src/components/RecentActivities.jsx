function RecentActivities({ activities }) {

  // Latest activities
  const recentActivities =
    activities?.slice(-5).reverse();

  return (

    <div className="bg-white rounded-2xl shadow p-6 h-[400px] overflow-y-auto">

      {/* Header */}

      <div className="mb-5">

        <h2 className="text-2xl font-bold">
          Recent Activities
        </h2>

        <p className="text-gray-500">
          Latest student activities
        </p>

      </div>

      {/* Activities */}

      <div className="space-y-4">

        {
          recentActivities?.length > 0 ? (

            recentActivities.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-4"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.activity}
                    </p>

                  </div>

                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                    {item.hours} hrs

                  </div>

                </div>

              </div>
            ))

          ) : (

            <p className="text-gray-500">
              No activities found
            </p>

          )
        }

      </div>

    </div>
  );
}

export default RecentActivities;