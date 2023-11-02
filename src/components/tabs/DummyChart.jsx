import React from "react";

import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import Paper from "@mui/material/Paper";

const DummyChart = ({ tabs }) => {
  return (
    <Paper
      sx={{
        maxWidth: "50%",
        margin: "100px auto",
        padding: "50px 0",
      }}
    >
      <PieChart
        series={[
          {
            data: tabs.map(({ id, title }) => ({
              id,
              label: title,
              value: title.length,
            })),
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: "gray",
          },
        }}
        height={200}
      />
    </Paper>
  );
};

export default DummyChart;
