import * as React from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function De() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex gap-10 justify-center">
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./cake.png" alt="" />
              </Button>
              <div className="w-[981px]">
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "981px",
                      height: "500px",
                      maxWidth: "981px",
                      maxHeight: "500px",
                    },
                  }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <div className="flex">
                      <Typography gutterBottom>
                        <img
                          src="./cake.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Торт</h1>
                          <h1 className="text-green-500 text-[24px]">
                            54,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => <PaginationItem />}
                            />
                          </Stack>
                          <Button
                            variant="contained"
                            color="success"
                            className="w-full h-[48px]  text-white mt-10"
                          >
                            Сагслах
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </BootstrapDialog>
              </div>
            </React.Fragment>

            <CardContent>
              <h1 className="font-bold"> Торт</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">54,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./shake.png" alt="" />
              </Button>
              <div className="w-[981px]">
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "981px",
                      height: "500px",
                      maxWidth: "981px",
                      maxHeight: "500px",
                    },
                  }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <div className="flex">
                      <Typography gutterBottom>
                        <img
                          src="./shake.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Oreo shake</h1>
                          <h1 className="text-green-500 text-[24px]">
                            14,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Oreo shake
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => <PaginationItem />}
                            />
                          </Stack>
                          <Button
                            variant="contained"
                            color="success"
                            className="w-full h-[48px]  text-white mt-10"
                          >
                            Сагслах
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </BootstrapDialog>
              </div>
            </React.Fragment>

            <CardContent>
              <h1 className="font-bold"> Oreo shake</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">14,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./chocolate.png" alt="" />
              </Button>
              <div className="w-[981px]">
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "981px",
                      height: "500px",
                      maxWidth: "981px",
                      maxHeight: "500px",
                    },
                  }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <div className="flex">
                      <Typography gutterBottom>
                        <img
                          src="./chocolate.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Chocolate</h1>
                          <h1 className="text-green-500 text-[24px]">
                            14,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Chocolate
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => <PaginationItem />}
                            />
                          </Stack>
                          <Button
                            variant="contained"
                            color="success"
                            className="w-full h-[48px]  text-white mt-10"
                          >
                            Сагслах
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </BootstrapDialog>
              </div>
            </React.Fragment>

            <CardContent>
              <h1 className="font-bold"> Chocolate </h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">14,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./yoghurt.png" alt="" />
              </Button>
              <div className="w-[981px]">
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "981px",
                      height: "500px",
                      maxWidth: "981px",
                      maxHeight: "500px",
                    },
                  }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <div className="flex">
                      <Typography gutterBottom>
                        <img
                          src="./yoghurt.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Yoghurt</h1>
                          <h1 className="text-green-500 text-[24px]">
                            14,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Yoghurt
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => <PaginationItem />}
                            />
                          </Stack>
                          <Button
                            variant="contained"
                            color="success"
                            className="w-full h-[48px]  text-white mt-10"
                          >
                            Сагслах
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </BootstrapDialog>
              </div>
            </React.Fragment>

            <CardContent>
              <h1 className="font-bold"> Yoghurt</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">14,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
