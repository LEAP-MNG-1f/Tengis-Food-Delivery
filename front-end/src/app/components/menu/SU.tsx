"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SU() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <div>
      <div className="flex gap-10 justify-center">
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./soup.png" alt="" />
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
                          src="./soup.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">
                            chicken-Soup
                          </h1>
                          <h1 className="text-green-500 text-[24px]">
                            34,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            chicken, төмс, лууван, сонгино, цөцгийн тос, самрын
                            үр
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <div className="flex items-center">
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={decrement}
                            >
                              −
                            </button>
                            <span className="w-16 text-center py-2 font-semibold text-gray-700 bg-white">
                              {count}
                            </span>
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={increment}
                            >
                              +
                            </button>
                          </div>
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
              <h1 className="font-bold"> Main Pizza </h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">34,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./jemm.png" alt="" />
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
                          src="./jemm.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Food tart</h1>
                          <h1 className="text-green-500 text-[24px]">
                            22,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Food tart
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <div className="flex items-center">
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={decrement}
                            >
                              −
                            </button>
                            <span className="w-16 text-center py-2 font-semibold text-gray-700 bg-white">
                              {count}
                            </span>
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={increment}
                            >
                              +
                            </button>
                          </div>
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
              <h1 className="font-bold"> Food tart</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">22,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <img src="./jemm.png" alt="" />
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
                          src="./jemm.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">
                            Өглөөний хоол
                          </h1>
                          <h1 className="text-green-500 text-[24px]">
                            14,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Өглөөний хоол
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <div className="flex items-center">
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={decrement}
                            >
                              −
                            </button>
                            <span className="w-16 text-center py-2 font-semibold text-gray-700 bg-white">
                              {count}
                            </span>
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={increment}
                            >
                              +
                            </button>
                          </div>
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
              <h1 className="font-bold"> Өглөөний хоол</h1>
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
                <img src="./soup.png" alt="" />
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
                          src="./soup.png"
                          className="w-[500px] h-[500px] mx-auto"
                        />
                      </Typography>
                      <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                        <div>
                          <h1 className="font-bold text-[28px]">Зутан шөл</h1>
                          <h1 className="text-green-500 text-[24px]">
                            14,800₮
                          </h1>
                        </div>
                        <div className="mt-5 w-full">
                          <h1 className="font-bold">Орц</h1>
                          <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                            Зутан шөл
                          </h1>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                          <h1 className="font-bold">Тоо</h1>

                          <div className="flex items-center">
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={decrement}
                            >
                              −
                            </button>
                            <span className="w-16 text-center py-2 font-semibold text-gray-700 bg-white">
                              {count}
                            </span>
                            <button
                              className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                              onClick={increment}
                            >
                              +
                            </button>
                          </div>
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
              <h1 className="font-bold"> Зутан шөл</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">17,800₮</h1>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
