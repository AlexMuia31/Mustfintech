import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider, MenuItem, Typography } from "@mui/material";

import Tables from "./Tables";
import { CssMenuItem, CssTextField } from "./CustomInputs";
import { CustomButton } from "./CustomButtons";
import DocumentModals from "./Modals/DocumentModals";
import InvestmentModals from "./Modals/InvestmentModal";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  background: "#EBEEF3",
  "& .MuiTabs-indicator": {
    backgroundColor: "#2A3958",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("xs")]: {
    minWidth: 0,
  },
  fontWeight: 400,
  marginRight: theme.spacing(1),

  color: "#B1B4BB",
  "&:hover": {
    color: "#B1B4BB",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#2A3958",
    fontWeight: 500,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

interface StyledTabProps {
  label: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const LandingTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs
          value={value}
          onChange={handleChange}
          variant={isUpMd ? "fullWidth" : "scrollable"}
        >
          <AntTab label="기본정보 관리" />
          <AntTab label="투자유형 관리" />
          <AntTab label="투자유형 관리" />
          <AntTab label="영업내역 조회" />
          <AntTab label="투자내역 조회" />
          <AntTab label="채권내역 조회" />
          <AntTab label="SMS 관리" />
          <AntTab label="상담내역 관리" />
          <AntTab label="1:1문의내역 조회" />
        </AntTabs>
      </Box>
      <Box sx={{ bgcolor: "#F4F4F5" }}>
        <CustomTabPanel value={value} index={0}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { sm: "column", xs: "column", md: "row" },
              mt: { sm: "10px", xs: "10px", md: "30px" },
            }}
          >
            <Typography
              fontSize={{
                xs: "12px",
                md: "20px",
                sm: "15px",
                color: "#0B101A",
                fontWeight: 600,
              }}
            >
              신청 목록{" "}
              <span style={{ color: "#5A616A", fontWeight: 500 }}>
                (총 100명 | 승인대기 1건)
              </span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { sm: "row", xs: "column" },
              }}
            >
              <CssTextField
                size="small"
                select
                sx={{ width: "150.15px" }}
                placeholder="승인여부 전체"
              >
                <CssMenuItem value="1" sx={{}}>
                  승인여부 전체
                </CssMenuItem>
                <CssMenuItem value="2">승인대기</CssMenuItem>
                <CssMenuItem value="3">승인완료</CssMenuItem>
                <CssMenuItem value="4">승인거부</CssMenuItem>
              </CssTextField>
              <CssTextField
                size="small"
                select
                sx={{ width: "150.15px" }}
                defaultValue="승인여부 전체"
              >
                <CssMenuItem value="1" sx={{}}>
                  신청일시순
                </CssMenuItem>
                <CssMenuItem value="2">승인일시순</CssMenuItem>
              </CssTextField>
              <CssTextField
                size="small"
                select
                sx={{ width: "150.15px" }}
                defaultValue="승인여부 전체"
              >
                <CssMenuItem value="1" sx={{}}>
                  승인완료
                </CssMenuItem>
                <CssMenuItem value="2">승인거부</CssMenuItem>
              </CssTextField>
            </Box>
          </Box>
          <Divider sx={{ mt: "10px", mb: "10px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "10px",
              flexDirection: { sm: "row", xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <InvestmentModals />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "#5A616A", mr: "17px" }}>
                선택한 0건
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CssTextField
                  size="small"
                  select
                  sx={{ width: "150.15px" }}
                  defaultValue="승인여부 전체"
                >
                  <CssMenuItem value="1" sx={{}}>
                    승인여부 전체
                  </CssMenuItem>
                  <CssMenuItem value="2">승인대기</CssMenuItem>
                </CssTextField>
                <DocumentModals />
              </Box>
            </Box>
          </Box>
          <Tables />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Tables />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box
            sx={{
              height: "100vh",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#A1A1A1", fontSize: "18px", lineHeight: "16px" }}
            >
              조회 결과가 없습니다.
            </Typography>
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default LandingTabs;
