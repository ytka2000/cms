import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const DummyTable = ({ tabs }) => (
  <TableContainer
    sx={{
      maxWidth: "50%",
      margin: "100px auto",
    }}
    component={Paper}
  >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Path</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tabs.map((tab) => (
          <TableRow
            key={tab.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{tab.id}</TableCell>
            <TableCell>{tab.title}</TableCell>
            <TableCell>{tab.path}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DummyTable;
