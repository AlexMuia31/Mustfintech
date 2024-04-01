import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)({
  background: "#2A3958",
  color: "#fff",
  borderRadius: "10px",
  "&:hover": {
    background: "#2A3958",
  },
});

export const WhiteButton = styled(Button)({
  background: "#fff",
  color: "#2A3958",
  border: "1px solid #2A3958",
  borderRadius: "10px",
  "&:hover": {
    background: "#fff",
    border: "1px solid #2A3958",
  },
});
