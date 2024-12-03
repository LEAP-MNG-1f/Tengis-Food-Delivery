"use client";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Open from "./Opne";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Breakfast() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col mt-20">
        <div className="flex flex-col mt-20">
          <div className="flex justify-center gap-2">
            <svg
              width="22"
              height="22"
              className="mt-2"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
                fill="#18BA51"
              />
            </svg>
            <h1 className="font-bold text-[22px] w-[1039px] mr-32">
              Үндсэн хоол
            </h1>
          </div>

          <div className="flex gap-10 justify-center">
            <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
              <img src="./pizza.png" alt="Main Pizza" />
              <CardContent>
                <h1 className="font-bold">Main Pizza</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">34,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
              <img src="./meatpie.png" alt="Food tart" />
              <CardContent>
                <h1 className="font-bold">Food tart</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">22,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
              <img src="./jemm.png" alt="Breakfast" />
              <CardContent>
                <h1 className="font-bold">Өглөөний хоол</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">14,800₮</h1>
                </div>
              </CardContent>
            </div>

            <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
              <img src="./soup.png" alt="Soup" />
              <CardContent>
                <h1 className="font-bold text-[18px]">Зутан шөл</h1>
                <div className="flex gap-3">
                  <h1 className="text-[#18BA51]">17,800₮</h1>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Open />
      </div>
    </div>
  );
}
