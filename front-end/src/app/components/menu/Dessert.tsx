import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Dessert() {
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
        <div className="flex gap-10 justify-center mt-20">
          <React.Fragment>
            <Button onClick={handleClickOpen}>
              <img src="./eeg.png" alt="" className="" />
            </Button>
            <div className="">
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
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
                <div>
                  <div className="flex w-[981px] h-[500px]">
                    <Typography gutterBottom>
                      <img
                        src="./eeg.png"
                        alt=""
                        className=" w-[500px] h-[500px]"
                      />
                    </Typography>
                    <div className="flex flex-col mt-10 ml-5">
                      <div>
                        <h1 className="font-bold text-[28px]">Main Pizza</h1>
                        <h1 className="text-green-500">34,800₮</h1>
                      </div>
                      <div className="mt-5 w-[368px] h-[54px]">
                        <h1 className="font-bold">Орц</h1>
                        <h1 className="bg-[#F6F6F6] text-gray-500 mt-5">
                          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                        </h1>
                      </div>

                      <div className="mt-20">
                        <h1 className="font-bold">Тоо</h1>
                        <Button
                          variant="contained"
                          color="success"
                          className="w-[368px] h-[48px]  text-white"
                        >
                          Сагслах
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </BootstrapDialog>
            </div>
          </React.Fragment>

          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <img src="./shake.png" alt="" />
            <CardContent>
              <h1 className="font-bold"> Oreo shake</h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">14,800₮</h1>
              </div>
            </CardContent>
          </div>

          <div className="flex flex-col  justify-center mt-10  w-[282px] h-[253px]">
            <img src="./chocolate.png" alt="" />
            <CardContent>
              <h1 className="font-bold"> Chocolate </h1>
              <div className="flex gap-3">
                <h1 className="text-[#18BA51]">14,800₮</h1>
              </div>
            </CardContent>
          </div>

          <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
            <img src="./yoghurt.png" alt="" />
            <CardContent>
              <h1 className="font-bold text-[18px]">Yoghurt </h1>
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
