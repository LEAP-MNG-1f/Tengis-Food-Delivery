"use client";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Link from "next/link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Admin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex  mt-20">
        <div className="flex  w-[402px] h-[1228px] justify-center gap-10">
          <div className="flex flex-col gap-10 ">
            <h1 className="font-bold text-[22px] ">Food menu</h1>
            <div className="flex flex-col font-bold gap-10  justify-center">
              <Link href={`/admine`}>
                <button className="border border-gray-300 w-[258px] h-[40px] hover:bg-green-500 hover:text-white rounded-lg">
                  Breakfast
                </button>
              </Link>
              <Link href={`/sou`}>
                <button className="border border-gray-300 w-[258px] h-[40px] hover:bg-green-500 hover:text-white rounded-lg">
                  Soup
                </button>
              </Link>
              <Link href={`/corus`}>
                <button className="border border-gray-300 w-[258px] h-[40px] hover:bg-green-500 hover:text-white rounded-lg">
                  Main course
                </button>
              </Link>
              <Link href={`/dissel`}>
                <button className="border border-gray-300 w-[258px] h-[40px] hover:bg-green-500 hover:text-white rounded-lg">
                  Desserts
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-[1,228px] ">
          <div>
            <h1 className="font-bold text-[22px]">Breakfast</h1>
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <div className="flex flex-col justify-center  w-[282px] h-[253px]">
              <img src="./meatpie.png" alt="Food tart" />
              <CardContent>
                <h1 className="font-bold">Food tart</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">22,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col justify-center  w-[282px] h-[253px]">
              <img src="./cerail.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Өглөөний хоол</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
            <div className="flex flex-col justify-center w-[282px] h-[253px]">
              <img src="./salad.png" alt="" />
              <CardContent>
                <h1 className="font-bold text-[18px]">Breakfast </h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                  <h1>26,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex gap-10 justify-center">
              <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
                <img src="./cake.png" alt="" />
                <CardContent>
                  <h1 className="font-bold"> Торт</h1>
                  <div className="flex gap-3">
                    <h1 className="text-[#18BA51]">54,800₮</h1>
                  </div>
                </CardContent>
              </div>

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
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <img src="./vegtbel.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Чихэрлэг тахиа</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">24,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
              <img src="./nuhsh.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Lunch</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">22,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col  justify-center mt-10  w-[282px] h-[253px]">
              <img src="./sendvich.png" alt="" />
              <CardContent>
                <h1 className="font-bold"> Сэндвич</h1>
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
