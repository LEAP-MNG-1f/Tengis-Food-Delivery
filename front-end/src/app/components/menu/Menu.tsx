"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import DialogContent from "@mui/material/DialogContent";
import MEn from "./MEn";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex gap-5 justify-center mt-10 ">
        <Link href={`/menu`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Breakfast
          </button>
        </Link>
        <Link href={`/soup`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Soup
          </button>
        </Link>
        <Link href={`/maincourse`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Main Course
          </button>
        </Link>
        <Link href={`/dessert`}>
          <button className="w-[280px] h-[43px] font-bold border border-gray-200 rounded-xl hover:bg-green-600 hover:text-white hover:rounded-xl">
            Dessert
          </button>
        </Link>
      </div>
      <div>
        <div className="flex justify-center gap-10 mt-20">
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  <img src="./eeg.png" alt="" />
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
                            src="./eeg.png"
                            alt="Main Pizza"
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
                          <div className="mt-10">
                            <h1 className="font-bold">Тоо</h1>
                            <Button
                              variant="contained"
                              color="success"
                              className="w-full h-[48px] mt-4 text-white"
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
                  <h1>16,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  <img src="./tsairmag.png" alt="" />
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
                            src="./tsairmag.png"
                            className="w-[500px] h-[500px] mx-auto"
                          />
                        </Typography>
                        <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                          <div>
                            <h1 className="font-bold text-[28px]">Зайрмаг</h1>
                            <h1 className="text-green-500 text-[24px]">
                              4,800₮
                            </h1>
                          </div>
                          <div className="mt-5 w-full">
                            <h1 className="font-bold">Орц</h1>
                            <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                              Зайрмаг
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
                <h1 className="font-bold"> Зайрмаг</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">4,800₮</h1>
                  <h1>6,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  <img src="./cerail.png" alt="" />
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
                            src="./cerail.png"
                            className="w-[500px] h-[500px] mx-auto"
                          />
                        </Typography>
                        <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                          <div>
                            <h1 className="font-bold text-[28px]">
                              Өглөөний хоол
                            </h1>
                            <h1 className="text-green-500 text-[24px]">
                              24,800₮
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
                <h1 className="font-bold"> Өглөөний хоол</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  <img src="./salad.png" alt="" />
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
                            src="./salad.png"
                            className="w-[500px] h-[500px] mx-auto"
                          />
                        </Typography>
                        <div className="flex flex-col mt-10 ml-10 w-[385px] h-[385px]">
                          <div>
                            <h1 className="font-bold text-[28px]">Breakfast</h1>
                            <h1 className="text-green-500 text-[24px]">
                              24,800₮
                            </h1>
                          </div>
                          <div className="mt-5 w-full">
                            <h1 className="font-bold">Орц</h1>
                            <h1 className="bg-[#F6F6F6] text-gray-500 mt-3 p-3 rounded">
                              Breakfast
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
                <h1 className="font-bold"> Breakfast </h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
        <div>
          <MEn />
        </div>
      </div>
    </div>
  );
}
