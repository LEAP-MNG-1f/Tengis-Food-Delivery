"use client";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Amtatan() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col mt-20 justify-center  ">
        <div className="flex justify-center   gap-2">
          <svg
            width="22"
            height="22"
            className="mt-2 "
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
              fill="#18BA51"
            />
          </svg>
          <h1 className="font-bold text-[22px] w-[1039px] mr-32"> Амттан</h1>
        </div>
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
                              Торт
                            </h1>
                          </div>
                          <div className="mt-10 flex flex-col gap-5">
                            <h1 className="font-bold">Тоо</h1>

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
                            <h1 className="font-bold text-[28px]">
                              Oreo shake
                            </h1>
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

                            <Stack spacing={4}>
                              <Pagination count={100} shape="rounded" />
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
    </div>
  );
}
