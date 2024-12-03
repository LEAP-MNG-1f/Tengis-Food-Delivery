"use client";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Enter() {
  const [district, setDistrict] = React.useState("");
  const [subdistrict, setSubdistrict] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState({
    cash: false,
    card: false,
  });

  const handleDistrictChange = (event: SelectChangeEvent) => {
    setDistrict(event.target.value);
  };

  const handleSubdistrictChange = (event: SelectChangeEvent) => {
    setSubdistrict(event.target.value);
  };

  const handleStreetChange = (event: SelectChangeEvent) => {
    setStreet(event.target.value);
  };

  const togglePaymentMethod = (method: keyof typeof paymentMethod) => {
    setPaymentMethod((prev) => ({ ...prev, [method]: !prev[method] }));
  };

  return (
    <div className="flex justify-center flex-col pt-20">
      <div className="flex justify-center mt-20 gap-20">
        {["Алхам 1", "Алхам 2"].map((step, idx) => (
          <div
            key={idx}
            className="w-[432px] h-[100px] border border-gray-100 rounded-lg drop-shadow-xl flex"
          >
            <div className="mt-8 ml-6">
              <Checkbox defaultChecked color="success" />
            </div>
            <div className="ml-10 mt-3">
              <h1 className="text-[#8B8E95] text-[14px]">{step}</h1>
              <h1 className="text-[20px]">
                {idx === 0
                  ? "Хаягийн мэдээлэл оруулах"
                  : "Захиалга баталгаажуулах"}
              </h1>
              <h1 className="text-[#0468C8] text-[16px]">Хүлээгдэж байна</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20 gap-20">
        <div className="w-[432px] h-[612px] border border-gray-100 rounded-lg drop-shadow-xl">
          <div className="ml-5 mt-5 flex flex-col gap-5">
            <h1>Хаяг аа оруулна уу</h1>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="district-select-label">
                  Дүүрэг сонгоно уу
                </InputLabel>
                <Select
                  labelId="district-select-label"
                  id="district-select"
                  value={district}
                  label="Дүүрэг сонгоно уу"
                  onChange={handleDistrictChange}
                >
                  <MenuItem value="Баянзүрх">Баянзүрх дүүрэг</MenuItem>
                  <MenuItem value="Хан-Уул">Хан-Уул дүүрэг</MenuItem>
                  <MenuItem value="Баянгол">Баянгол дүүрэг</MenuItem>
                  <MenuItem value="Сонгинохайрхан">
                    Сонгинохайрхан дүүрэг
                  </MenuItem>
                  <MenuItem value="Чингэлтэй">Чингэлтэй дүүрэг</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="subdistrict-select-label">
                  Хороо сонгоно уу
                </InputLabel>
                <Select
                  labelId="subdistrict-select-label"
                  id="subdistrict-select"
                  value={subdistrict}
                  label="Хороо сонгоно уу"
                  onChange={handleSubdistrictChange}
                >
                  <MenuItem value="1-р хороо">1-р хороо</MenuItem>
                  <MenuItem value="2-р хороо">2-р хороо</MenuItem>
                  <MenuItem value="3-р хороо">3-р хороо</MenuItem>
                  <MenuItem value="4-р хороо">4-р хороо</MenuItem>
                  <MenuItem value="5-р хороо">5-р хороо</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 384, height: 48 }}>
              <FormControl fullWidth>
                <InputLabel id="street-select-label">
                  Байр гудамж сонгоно уу
                </InputLabel>
                <Select
                  labelId="street-select-label"
                  id="street-select"
                  value={street}
                  label="Байр гудамж сонгоно уу"
                  onChange={handleStreetChange}
                >
                  <MenuItem value="Нархан хотхон">Нархан хотхон</MenuItem>
                  <MenuItem value="26-р байр">26-р байр</MenuItem>
                  <MenuItem value="Хоймор хотхон">Хоймор хотхон</MenuItem>
                  <MenuItem value="45-р байр">45-р байр</MenuItem>
                  <MenuItem value="Зайсан хотхон">Зайсан хотхон</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="ml-5 mt-8">
            <h1>Нэмэлт мэдээлэл</h1>
            <Input
              placeholder="Орц, давхар, орцны код ..."
              variant="soft"
              sx={{
                width: 384,
                height: 80,
                marginTop: 2,
              }}
            />
          </div>

          <div className="ml-5 mt-5">
            <h1>Утасны дугаар</h1>
            <Input
              placeholder="Утасны дугаар*"
              variant="soft"
              sx={{
                width: 384,
                marginTop: 2,
              }}
            />
          </div>
          <div className="ml-5 mt-7">
            <h1>Төлбөр төлөх</h1>
            <div className="mt-5 flex gap-10">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={paymentMethod.cash}
                    onChange={() => togglePaymentMethod("cash")}
                  />
                }
                label="Бэлнээр"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={paymentMethod.card}
                    onChange={() => togglePaymentMethod("card")}
                  />
                }
                label="Картаар"
              />
            </div>
          </div>
        </div>
        <div className="w-[432px] h-[612px] border border-gray-100 rounded-lg drop-shadow-xl">
          <div className="flex gap-5 justify-center mt-[500px]">
            <div className="flex flex-col">
              <h1>Нийт төлөх дүн</h1>
              <h1 className="font-bold">34,800₮</h1>
            </div>
            <button className="w-[187px] h-[48px] rounded-lg bg-[#EEEFF2] hover:bg-green-500 hover:text-white">
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
