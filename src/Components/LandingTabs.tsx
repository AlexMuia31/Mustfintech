import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  fontFamily: ["-apple-system"].join(","),
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

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
        <Box sx={{ p: 3 }} />
      </Box>
      <Box sx={{ bgcolor: "#2e1534" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        ></StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};

export default LandingTabs;
