import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function DashboardChart({ activities }) {

  // Chart data
  const chartData = activities?.map(
    (item) => ({
      name: item.name,
      hours: item.hours,
    })
  );

  return (

    <div className="bg-white rounded-2xl shadow p-6 h-[400px]">

      {/* Header */}

      <div className="mb-5">

        <h2 className="text-2xl font-bold">
          Activity Analytics
        </h2>

        <p className="text-gray-500">
          Student activity overview
        </p>

      </div>

      {/* Chart */}

      <ResponsiveContainer
        width="100%"
        height="80%"
      >

        <BarChart data={chartData}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />
<Bar
  dataKey="hours"
  fill="#1e3a8a"
  radius={[10, 10, 0, 0]}
/>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DashboardChart;