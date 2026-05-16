function SummaryCards({ summary }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow">
        <h2 className="text-lg">
          Total Activities
        </h2>
        <p className="text-3xl font-bold mt-2">
          {summary?.total_entries || 0}
        </p>
      </div>


      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow">
        <h2 className="text-lg">
          Total Hours
        </h2>
        <p className="text-3xl font-bold mt-2">
          {summary?.total_hours || 0}
        </p>
      </div>

      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow">
        <h2 className="text-lg">
          Most Active User
        </h2>
        <p className="text-2xl font-bold mt-2">
          {summary?.most_active_user || "None"}
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;