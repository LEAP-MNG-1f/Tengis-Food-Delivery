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
            <div className=" flex gap-5 w-[384px] h-[48px] bg-[#F7F7F8]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-5 mt-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1566"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_1566)">
                  <path
                    d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>

              <Box sx={{ width: 296, height: 50 }}>
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
            </div>
            <div className=" flex gap-5 w-[384px] h-[48px] bg-[#F7F7F8]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-5 mt-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1566"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_1566)">
                  <path
                    d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <Box sx={{ width: 296, height: 48 }}>
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
            </div>
            <div className=" flex gap-5 w-[384px] h-[48px] bg-[#F7F7F8]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-5 mt-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1566"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_1566)">
                  <path
                    d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <Box sx={{ width: 296, height: 48 }}>
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
          </div>
          <div className="ml-5 mt-5">
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
                    color="success"
                    onChange={() => togglePaymentMethod("cash")}
                  />
                }
                label="Бэлнээр"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={paymentMethod.card}
                    color="success"
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
