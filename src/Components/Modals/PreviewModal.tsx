import React from "react";
import { CustomButton, WhiteButton } from "../CustomButtons";
import Modal from "@mui/material/Modal";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CssTextField } from "../CustomInputs";
import TableChip from "../TableChip";
import Carousel from "../Carousel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomButton
        onClick={handleOpen}
        sx={{ width: { sm: "160px", xs: "80px" } }}
      >
        확인
      </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: { sm: 400, xs: 280 }, p: "1%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/info.png"
              alt="close"
              width={30}
              height={30}
              onClick={handleClose}
            />
            <Image
              src="/close.png"
              alt="close"
              width={12}
              height={12}
              onClick={handleClose}
            />
          </Box>
          <Typography
            fontSize={{
              sm: "18px",
              fontFamily: "Pretendard",
              fontWeight: 600,
              lineHeight: "28px",
            }}
            mt="7px"
          >
            선택된 2명의 승인상태를 변경하시겠습니까?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <CustomButton
              sx={{ mt: "7%", width: { sm: "170px", xs: "100px" } }}
            >
              확인
            </CustomButton>
            <WhiteButton
              sx={{ mt: "7%", width: { sm: "170px", xs: "100px" } }}
              onClick={handleClose}
            >
              취소
            </WhiteButton>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function ChildModal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <WhiteButton
        onClick={handleOpen}
        variant="outlined"
        sx={{ width: { sm: "160px", xs: "80px" } }}
      >
        파일 다운로드
      </WhiteButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { sm: 400, xs: 280 },
            p: "1%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/success.png"
              alt="close"
              width={30}
              height={30}
              onClick={handleClose}
            />
            <Image
              src="/close.png"
              alt="close"
              width={12}
              height={12}
              onClick={handleClose}
            />
          </Box>
          <Typography
            fontSize={{
              sm: "18px",
              fontFamily: "Pretendard",
              fontWeight: 600,
              lineHeight: "28px",
            }}
            mt="7px"
          >
            저장되었습니다.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              sx={{ mt: "7%", width: { sm: "170px", xs: "100px" } }}
            >
              확인
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const PreviewModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: "61px",
            justifyContent: "center",
            alignItems: "center",
            background: "#EBEEF3",
            height: "29px",
            borderRadius: "8px",
            border: "1px solid #D7D8DA",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Pretendard",
              fontWeight: 500,
              lineHeight: "16.8px",
              fontSize: "14px ",
            }}
          >
            보기
          </Typography>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: { md: 800, sm: 600, xs: 350 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Pretendard",
                fontWeight: 500,
                lineHeight: "16.71px",
                fontSize: { sm: "18px", xs: "14px" },
              }}
            >
              서류 보기
            </Typography>
            <Image
              src="/close.png"
              alt="close"
              width={12}
              height={12}
              onClick={handleClose}
            />
          </Box>
          <Divider sx={{ background: "#D7D8DA" }} />
          <Box
            sx={{
              m: "24px 24px 24px 24px",
              border: "1px solid #D7D8DA",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", pr: 2 }}>
              <Box
                sx={{
                  background: "#EEF0F4",
                  width: { sm: "165px", xs: "100px" },
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid #fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    p: "5%",
                    fontFamily: "Pretendard",
                    fontWeight: 500,
                    lineHeight: "16.71px",
                  }}
                >
                  서류 <span style={{ color: "red" }}>*</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "592px", xs: "350px" },
                  pl: { sm: 2, xs: 1 },
                  pt: { sm: 2, xs: 1 },
                  height: { sm: "719px", xs: "400px" },
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <Carousel />
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              background: "#D7D8DA",
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, p: "2%" }}
          >
            <WhiteButton
              variant="outlined"
              sx={{ width: { sm: "160px", xs: "140px" } }}
            >
              파일 다운로드
            </WhiteButton>
            <CustomButton sx={{ width: { sm: "160px", xs: "140px" } }}>
              확인
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PreviewModal;
