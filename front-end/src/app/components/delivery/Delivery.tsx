import * as React from "react";

export default function Delivery() {
  return (
    <div className="flex justify-center flex-col pt-20 bg-[#FFF]">
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.6266760892133!2d106.91588853673953!3d47.91435736922469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96936d2cf04775%3A0xdae2d055a1ea3288!2sMbook!5e0!3m2!1smn!2smn!4v1733282134415!5m2!1smn!2smn"
          width="1200"
          height="616"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex justify-center mt-20">
        <div className="flex gap-5 font-bold text-[22px] w-[1200px] h-[64px] ">
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
          <h1>Хүргэлтийн бүс дэх хаягууд</h1>
        </div>
      </div>
      <div className="flex justify-center  mt-20 gap-20 ">
        <div className="w-[588px] h-[388px] border border-gray-100 rounded-lg drop-shadow-xl">
          <h1 className="font-bold mt-5 ml-5 text-[20px] ">A бүс</h1>
          <div className="flex">
            <div className="mt-8 ml-5 w-[262px] h-[229px] flex flex-col gap-4">
              <h1>Нархан хотхон</h1>
              <h1>26-р байр</h1>
              <h1>26-р байр</h1>
              <h1>45-р байр</h1>
              <h1>3-р байр</h1>
              <h1>Хоймор хотхон </h1>
              <h1>Хоймор хотхон </h1>
            </div>
            <div className="mt-8 ml-5 w-[262px] h-[229px] flex flex-col gap-4">
              <h1>Нархан хотхон</h1>
              <h1>26-р байр</h1>
              <h1>26-р байр</h1>
              <h1>45-р байр</h1>
              <h1>3-р байр</h1>
              <h1>Хоймор хотхон </h1>
              <h1>Хоймор хотхон </h1>
            </div>
          </div>
        </div>

        <div className="w-[588px] h-[388px] border border-gray-100 rounded-lg drop-shadow-xl">
          <h1 className="font-bold mt-5 ml-5 text-[20px] ">Б бүс</h1>
          <div className="flex">
            <div className="mt-8 ml-5 w-[262px] h-[229px] flex flex-col gap-4">
              <h1>Нархан хотхон</h1>
              <h1>26-р байр</h1>
              <h1>26-р байр</h1>
              <h1>45-р байр</h1>
              <h1>3-р байр</h1>
              <h1>Хоймор хотхон </h1>
              <h1>Хоймор хотхон </h1>
            </div>
            <div className="mt-8 ml-5 w-[262px] h-[229px] flex flex-col gap-4">
              <h1>Нархан хотхон</h1>
              <h1>26-р байр</h1>
              <h1>26-р байр</h1>
              <h1>45-р байр</h1>
              <h1>3-р байр</h1>
              <h1>Хоймор хотхон </h1>
              <h1>Хоймор хотхон </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
