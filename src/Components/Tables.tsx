import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledCheck } from "./StyledCheck";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EBEEF3",
    color: "#222222",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F9F9FB",
    border: 0,
  },
  // hide last border

  "& td, & th": {
    border: 0,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  checkbox: JSX.Element,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { checkbox, name, calories, fat, carbs, protein };
}

const rows = [
  createData(<StyledCheck />, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(<StyledCheck />, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(<StyledCheck />, "Eclair", 262, 16.0, 24, 6.0),
  createData(<StyledCheck />, "Cupcake", 305, 3.7, 67, 4.3),
  createData(<StyledCheck />, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1170 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <StyledCheck />
            </StyledTableCell>
            <StyledTableCell align="center">NO</StyledTableCell>
            <StyledTableCell align="center">기존유형</StyledTableCell>
            <StyledTableCell align="center">신청유형</StyledTableCell>
            <StyledTableCell align="center">제출서류</StyledTableCell>
            <StyledTableCell align="center">신청일시</StyledTableCell>
            <StyledTableCell align="center">승인여부</StyledTableCell>
            <StyledTableCell align="center">승인거부 사유</StyledTableCell>
            <StyledTableCell align="center">승인거부 사유</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.checkbox}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
