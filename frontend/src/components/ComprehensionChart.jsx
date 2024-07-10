import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "CPCS-203",
    comprehension: 89,
  },
  {
    name: "CPIS-334",
    comprehension: 70,
  },
  {
    name: "MRKT-260",
    comprehension: 56,
  },
  {
    name: "BUS-232",
    comprehension: 35,
  },
];

const ComprehensionChart = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="comprehension" fill="#8884d8" />
    </BarChart>
  );
};

export default ComprehensionChart;
