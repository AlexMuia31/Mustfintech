import React from "react";
import { CustomButton, WhiteButton } from "../CustomButtons";
import Modal from "@mui/material/Modal";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { CssMenuItem, CssTextField } from "../CustomInputs";

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
        저장
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
          <Typography fontSize={{ sm: "18px" }} mt="7px">
            jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.
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
        취소
      </WhiteButton>
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
          <Typography fontSize={{ sm: "18px" }} mt="7px">
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

const DocumentModals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton
        sx={{ height: "39px", width: "100px" }}
        onClick={handleOpen}
      >
        저장
      </CustomButton>
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
            <Typography>투자유형 변경</Typography>
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
              m: "24px 24px 0px 24px",
              border: "1px solid #D7D8DA",
            }}
          >
            <Box sx={{ display: "flex", height: { sm: "49px", xs: "42px" } }}>
              <Box
                sx={{
                  background: "#EEF0F4",
                  width: { sm: "160px", xs: "100px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: { md: "16px", xs: "12px" }, p: "5%" }}
                >
                  회원번호
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { sm: "592px", xs: "100%" },
                  pl: { sm: 2, xs: 1 },
                }}
              >
                <Typography>abc111</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", height: { sm: "49px", xs: "42px" } }}>
              <Box
                sx={{
                  background: "#EEF0F4",
                  width: { sm: "160px", xs: "100px" },
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid #fff",
                }}
              >
                <Typography
                  sx={{ fontSize: { md: "16px", xs: "12px" }, p: "5%" }}
                >
                  회원명/법인명
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { sm: "592px", xs: "100%" },
                  pl: { sm: 2, xs: 1 },
                  borderTop: "1px solid #D7D8DA",
                }}
              >
                <Typography>김길동</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", height: { sm: "49px", xs: "42px" } }}>
              <Box
                sx={{
                  background: "#EEF0F4",
                  width: { sm: "160px", xs: "100px" },
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid #fff",
                }}
              >
                <Typography
                  sx={{ fontSize: { md: "16px", xs: "12px" }, p: "5%" }}
                >
                  투자유형 <span style={{ color: "red" }}>*</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { sm: "592px", xs: "100%" },
                  pl: { sm: 2, xs: 1 },
                  borderTop: "1px solid #D7D8DA",
                }}
              >
                <CssTextField
                  select
                  size="small"
                  sx={{ width: { xs: "200px", sm: "282px" } }}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          maxHeight: { xs: 150, sm: 400 },
                        },
                      },
                    },
                  }}
                >
                  <CssMenuItem value="1" sx={{}}>
                    일반개인
                  </CssMenuItem>
                  <CssMenuItem value="2">소득적격</CssMenuItem>
                  <CssMenuItem value="3">개인전문</CssMenuItem>
                  <CssMenuItem value="4">법인</CssMenuItem>
                  <CssMenuItem value="5">여신금융</CssMenuItem>
                  <CssMenuItem value="6">P2P온투</CssMenuItem>
                </CssTextField>
              </Box>
            </Box>
            <Box sx={{ display: "flex", height: { sm: "49px", xs: "42px" } }}>
              <Box
                sx={{
                  background: "#EEF0F4",
                  width: { sm: "160px", xs: "100px" },
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid #fff",
                }}
              >
                <Typography
                  sx={{ fontSize: { md: "16px", xs: "12px" }, p: "5%" }}
                >
                  서류첨부 <span style={{ color: "red" }}>*</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { sm: "592px", xs: "100%" },
                  pl: { sm: 2, xs: 1 },
                  borderTop: "1px solid #D7D8DA",
                }}
              >
                <Button
                  sx={{
                    background: "#EBEEF3",
                    borderRadius: "8px",
                    color: "#222",
                    width: "76px",
                    "&:hover": { background: "#D7D8DA" },
                  }}
                >
                  파일 선택
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: { xs: "5px 0px 20px 30px" } }}>
            <Typography sx={{ fontSize: "13px" }}>
              . 파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              . 최대 10개, 100MB까지 등록이 가능합니다.
            </Typography>
          </Box>
          <Divider
            sx={{
              background: "#D7D8DA",
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, p: "2%" }}
          >
            <ChildModal />
            <ChildModal2 />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DocumentModals;
