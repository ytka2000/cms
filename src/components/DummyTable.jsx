import React from "react";
import { tabs } from "../utils/getTabs";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DummyTable = () => (
  <TableContainer
    sx={{
      maxWidth: "50%",
      maxHeight: "50%",
      margin: "100px auto",
    }}
    component={Paper}
  >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Path</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tabs.map((tab) => (
          <TableRow
            key={tab.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {tab.id}
            </TableCell>
            <TableCell>{tab.title}</TableCell>
            <TableCell>{tab.path}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DummyTable;
