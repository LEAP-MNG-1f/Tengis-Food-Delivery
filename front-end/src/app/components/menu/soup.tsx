"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Link from "next/link";
import SU from "./SU";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Soup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex gap-5 justify-center mt-20 ">
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
        <SU />
      </div>
    </div>
  );
}
