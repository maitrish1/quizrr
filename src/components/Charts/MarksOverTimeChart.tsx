import React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const MarksOverTimeChart = () => {
  return (
    <div className="h-90 w-2/5 flex items-center justify-center rounded-xl border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <LineChart
          width={500}
          height={300}
          series={[{ data: uData, label: "uv", area: true, showMark: false }]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: "none",
            },
          }}
        />
    </div>
  );
};

export default MarksOverTimeChart;
