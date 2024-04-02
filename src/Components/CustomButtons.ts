import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)({
  fontSize: "16px",
  fontFamily: "Pretendard",
  fontWeight: 600,
  lineHeight: "19.2px",
  background: "#2A3958",
  color: "#fff",
  borderRadius: "10px",
  "&:hover": {
    background: "#2A3958",
  },
});

export const WhiteButton = styled(Button)({
  fontSize: "16px",
  fontFamily: "Pretendard",
  fontWeight: 600,
  lineHeight: "19.2px",
  background: "#fff",
  color: "#2A3958",
  border: "1px solid #2A3958",
  borderRadius: "10px",
  "&:hover": {
    background: "#fff",
    border: "1px solid #2A3958",
  },
});
