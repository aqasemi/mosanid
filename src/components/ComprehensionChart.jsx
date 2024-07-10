// ComprehensionChart.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "CPCS-203", uv: 89, pv: 2400, amt: 2400 },
  { name: "CPIS-334", uv: 70, pv: 2400, amt: 2400 },
  { name: "MRKT-260", uv: 66, pv: 2400, amt: 2400 },
  { name: "BUS-232", uv: 22, pv: 2400, amt: 2400 },
];

const ComprehensionChart = () => {
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      layout="vertical"
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
      barSize={20}
      barGap={8}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} />
      <YAxis type="category" dataKey="name" width={100} />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default ComprehensionChart;
