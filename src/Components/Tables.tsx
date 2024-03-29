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
import TableChip from "./TableChip";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: "1px solid #fff",
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
  id: any,
  name: any,
  calories: any,
  document: JSX.Element,
  fat: any,
  carbs: any,
  protein: any,
  last: any
) {
  return { checkbox, id, name, calories, document, fat, carbs, protein, last };
}

const rows = [
  createData(
    <StyledCheck />,
    1,
    "소득적격",
    " 개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    " ",
    " "
  ),
  createData(
    <StyledCheck />,
    2,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    3,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    4,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    5,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    6,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    7,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    8,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    9,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    10,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    11,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    12,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    13,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    14,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    15,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    16,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    17,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    18,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    19,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    20,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    21,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    22,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    23,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    24,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    25,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    26,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    27,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    28,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    29,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    30,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    31,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    32,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    33,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    34,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    35,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    36,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    37,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    38,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    39,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    40,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    41,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    42,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    43,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    44,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    45,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    46,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    6.0,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    47,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    9.0,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    48,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    "",
    "2023-01-10 09:00:00"
  ),
  createData(
    <StyledCheck />,
    49,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    3.7,
    "",
    ""
  ),
  createData(
    <StyledCheck />,
    50,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    16.0,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00"
  ),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1170, width: "100%" }}>
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
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.document}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.last}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
