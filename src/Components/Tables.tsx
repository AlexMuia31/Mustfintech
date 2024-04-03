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
import { GreenChip, RedChip, YellowChip } from "./CustomChips";
import PreviewModal from "./Modals/PreviewModal";
import { TablePagination } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: "1px solid #fff",
  borderBottom: "1px solid #fff",
  fontFamily: "Pretendard",

  color: "#222222",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EBEEF3",
    color: "#222222",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "16px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "18px",
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
  last: any,
  manager: any
) {
  return {
    checkbox,
    id,
    name,
    calories,
    document,
    fat,
    carbs,
    protein,
    last,
    manager,
  };
}

const rows = [
  createData(
    <StyledCheck />,
    1,
    "소득적격",
    " 개인전문",
    <PreviewModal />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    " ",
    " ",
    ""
  ),
  createData(
    <StyledCheck />,
    2,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck sx={{}} />,
    3,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    4,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    6,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    7,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    9,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    10,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    12,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    13,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    15,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    16,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    18,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    19,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    21,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    22,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    24,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    25,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    27,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    28,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    30,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    31,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    33,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    34,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    36,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    37,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    39,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    40,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    42,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    43,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    45,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    46,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    48,
    "소득적격",
    "소득적격",
    <TableChip />,
    "2023-01-10 09:00:00",
    <GreenChip label="승인완료" />,
    "",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
  createData(
    <StyledCheck />,
    49,
    "소득적격",
    "개인전문",
    <TableChip />,
    "2023-01-10 09:00:00",
    <YellowChip label="승인대기" />,
    "",
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
    <RedChip label="승인거부" />,
    " 서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    "2023-01-10 09:00:00",
    "김관리자"
  ),
];

export default function Tables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ maxHeight: { md: 1000, xs: 850 } }}
      >
        <Table
          stickyHeader
          sx={{ minWidth: { md: 1400, xs: 1500 } }}
          size="small"
        >
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
              <StyledTableCell align="center">승인일시</StyledTableCell>
              <StyledTableCell align="center"> 관리자</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.checkbox}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.document}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                  <StyledTableCell align="center">{row.last}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.manager}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
