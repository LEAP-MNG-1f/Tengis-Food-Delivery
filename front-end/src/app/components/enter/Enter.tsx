"use client";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Enter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div className="flex justify-center flex-col pt-20 ">
      <div className="flex justify-center  mt-20 gap-20 ">
        <div className="w-[432px] h-[100px] border border-gray-100 rounded-lg drop-shadow-xl flex">
          <div className="mt-8 ml-6">
            <Checkbox defaultChecked color="success" />
          </div>
          <div className="ml-10 mt-3">
            <h1 className="text-[#8B8E95] text-[14px]">Алхам 1</h1>
            <h1 className=" text-[20px]">Хаягийн мэдээлэл оруулах</h1>
            <h1 className="text-[#0468C8] text-[16px]">Хүлээгдэж байна</h1>
          </div>
        </div>
        <div className="w-[432px] flex h-[100px] border border-gray-100 rounded-lg drop-shadow-xl">
          <div className="mt-8 ml-6">
            <Checkbox defaultChecked color="success" />
          </div>
          <div className="ml-10 mt-3">
            <h1 className="text-[#8B8E95] text-[14px]">Алхам 2</h1>
            <h1 className=" text-[20px]">Захиалга баталгаажуулах</h1>
            <h1 className="text-[#0468C8] text-[16px]">Хүлээгдэж байна</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center  mt-20 gap-20 ">
        <div className="w-[432px] h-[612px] border border-gray-100 rounded-lg drop-shadow-xl">
          <div className="ml-5 mt-5 flex flex-col gap-5">
            <h1>Хаяг аа оруулна уу</h1>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Дүүрэг сонгоно уу
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Дүүрэг сонгоно уу"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Баянзүрх дүүрэг</MenuItem>
                  <MenuItem value={20}>Хан-Уул дүүрэг</MenuItem>
                  <MenuItem value={30}>Баянгол дүүрэг</MenuItem>
                  <MenuItem value={40}>Сонгинохайрхан дүүрэг</MenuItem>
                  <MenuItem value={50}>Чингэлтэй дүүрэг</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Хороо сонгоно уу
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Дүүрэг сонгоно уу"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1-р хороо</MenuItem>
                  <MenuItem value={20}>2-р хороо</MenuItem>
                  <MenuItem value={30}>3-р хороо</MenuItem>
                  <MenuItem value={40}>4-р хороо</MenuItem>
                  <MenuItem value={50}>5-р хороог</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Байр гудамж сонгоно уу
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Дүүрэг сонгоно уу"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Нархан хотхон</MenuItem>
                  <MenuItem value={20}>26-р байр</MenuItem>
                  <MenuItem value={30}>Хоймор хотхон</MenuItem>
                  <MenuItem value={30}>45-р бай</MenuItem>
                  <MenuItem value={30}>Зайсан хотхон</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="ml-5 mt-8">
            <h1>Нэмэлт мэдээлэл</h1>
            <button className="mt-2">
              <Input
                placeholder="Орц, давхар, орцны код ..."
                variant="soft"
                sx={{
                  width: 384,
                  height: 80,
                }}
              />
            </button>
          </div>
          <div className="ml-5 mt-5 ">
            <h1>Нэмэлт мэдээлэл</h1>
            <button className="mt-3">
              <Box
                sx={{
                  width: 384,
                }}
              >
                <Input placeholder="Утасны дугаар*" variant="soft" />
              </Box>
            </button>
          </div>
          <div className="ml-5 mt-7">
            <h1>Төлбөр төлөх </h1>
            <button className="mt-5 flex gap-32">
              <Checkbox label="Бэлнээр" color="neutral" defaultChecked />
              <Checkbox label="Картаар" color="neutral" defaultChecked />
            </button>
          </div>
        </div>
        <div className="w-[432px] h-[612px] border border-gray-100 rounded-lg drop-shadow-xl ">
          <div className="flex gap-5 justify-center mt-[500px]">
            <div className="flex flex-col  ">
              <h1>Нийт төлөх дүн</h1>
              <h1 className="font-bold">34,800₮</h1>
            </div>
            <button className="w-[187px] h-[48px] rounded-lg hover:text-white bg-[#EEEFF2] hover:bg-green-500">
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
