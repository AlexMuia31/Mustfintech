import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Tables from "./Tables";

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
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),

  color: "#B1B4BB",
  "&:hover": {
    color: "#B1B4BB",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#2A3958",
    fontWeight: theme.typography.fontWeightMedium,
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
          <Tables />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default LandingTabs;
