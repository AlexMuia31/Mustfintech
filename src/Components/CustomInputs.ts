import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import exp from "constants";

export const CssTextField = styled(TextField)({
  "& .MuiTextField-root": { width: "150.15px" },
  "& label.Mui-focused": {
    color: "#B1B4BB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B1B4BB",
    },
    "&:hover fieldset": {
      borderColor: "#B1B4BB",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B1B4BB",
    },
  },
  ".MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
});

export const CssMenuItem = styled(MenuItem)({
  "&:hover": { background: "#2A3958", color: "#fff" },
});
