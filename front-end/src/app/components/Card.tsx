"use client";
import { useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function  Carda () {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000 ");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center">
  
    
     <div className="bg-[#18BA51] w-full h-[788px] mt-10 flex items-center justify-between " style={{
        backgroundImage:'url(/food.png)',
        backgroundPosition:'center',
        backgroundSize:'cover'
     }}>   
      <div className=" w-[384px] h-[224.5px] font-bold text-white ml-40">
      <h1 className="text-[55px]">Pinecone Food delivery</h1>
      <h1>Horem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <div className=" flex items-end pr-40"><img src="./budaa.png" className="w-[588px] h-[438px]" /></div>
     </div>

     <div className="mt-10 flex justify-center gap-10">
        <Card sx={{ maxWidth:264,  height:155 }}>
      <CardContent>
        <button ><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.0977 18.6875C38.9258 18.7363 33.0664 19.127 29.4043 21.0801C29.209 21.1777 28.8672 21.1777 28.6719 21.0801C25.0098 19.127 19.1504 18.7363 17.9785 18.6875C16.3184 18.6875 15 20.0059 15 21.6172V36.0703C15 37.6328 16.2207 38.8535 17.7832 38.9512C19.4922 39.0488 23.7402 39.3418 26.6699 40.416C26.9629 40.5137 27.207 40.5625 27.4512 40.5625H30.5762C30.8691 40.5625 31.1133 40.5137 31.4062 40.416C34.3359 39.3418 38.584 39.0488 40.293 38.9512C41.8555 38.8535 43.0762 37.6328 43.0762 36.0703V21.6172C43.125 20.0059 41.7578 18.6875 40.0977 18.6875ZM28.2812 38.2676C28.2812 38.707 27.8906 39.0488 27.5 39.0488C27.4023 39.0488 27.3535 39 27.2559 39C24.1797 37.8281 19.9805 37.4863 17.8809 37.3887C17.1484 37.3398 16.5625 36.8027 16.5625 36.0703V21.6172C16.5625 20.8848 17.1973 20.2988 17.9785 20.2988C18.9062 20.2988 23.9355 20.6406 27.3535 22.1543C27.8906 22.3984 28.2324 22.9355 28.2324 23.5215L28.2812 28.4043V38.2676ZM41.5625 36.0703C41.5625 36.8027 40.9277 37.3398 40.1953 37.3887C38.0957 37.4863 33.8965 37.8281 30.8203 39C30.7227 39 30.6738 39.0488 30.5762 39.0488C30.1855 39.0488 29.7949 38.707 29.7949 38.2676V28.4043L29.8438 23.5215C29.8438 22.9355 30.1855 22.3984 30.7227 22.1543C34.1406 20.6406 39.1699 20.2988 40.0977 20.2988C40.8789 20.2988 41.5137 20.8848 41.5137 21.6172V36.0703H41.5625Z" fill="#18BA51"/>
       </svg>
         </button>
        <Typography variant="body1" sx={{ color: 'black' }}>
         Хүргэлтийн төлөв хянах
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>

      <Card sx={{ maxWidth:264,  height:155 }}>
      <CardContent>
        <button ><svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.75 15.2188C22.7227 15.2188 16.2188 21.7227 16.2188 29.75C16.2188 37.7773 22.7227 44.2812 30.75 44.2812C38.7773 
44.2812 45.2812 37.7773 45.2812 29.75C45.2812 21.7227 38.7773 15.2188 30.75 15.2188ZM43.4062 29.75C43.4062 36.7227 37.7227 
42.4062 30.75 42.4062C23.7773 42.4062 18.0938 36.7812 18.0938 29.75C18.0938 22.8359 23.7188 17.0938 30.75 17.0938C37.6641
 17.0938 43.4062 22.7773 43.4062 29.75ZM34.6758 34.9648C34.9688 35.1992 35.4375 35.082 35.6133 34.7891L36.1406 34.1445C36.375 
 33.793 36.2578 33.3828 35.9648 33.1484L31.8633 30.1602V21.5469C31.8633 21.1953 31.5117 20.8438 31.1602 20.8438H30.3398C29.9297 
 20.8438 29.6367 21.1953 29.6367 21.5469V30.9219C29.6367 31.1562 29.6953 31.332 29.8711 31.5078L34.6758 34.9648Z" fill="#18BA51"/>
</svg>
         </button>
        <Typography variant="body1" sx={{ color: 'black' }}>
         Шуурхай хүргэлт
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>

      <Card sx={{ maxWidth:264,  height:155 }}>
      <CardContent>
        <button >
            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5039 31.625H44.7969C45.207 30.8047 45.4414 29.8672 45.5 28.8125C45.5 26.8789 44.6211 
            25.1797 43.2734 23.9492C42.3945 20.8438 39.5234 18.5 36.125 18.5C35.8906 18.5 35.6562 18.5586 35.4805 
            18.6172C34.4258 16.332 32.1992 14.75 29.5625 14.75C26.9258 14.75 24.6406 16.332 23.5859 18.6172C23.4102 
            18.5586 23.1758 18.5 23 18.5C18.8398 18.5 15.5 21.8984 15.5 26C15.5 28.2852 16.4961 30.2773 18.0781 
            31.625H16.4375C15.9102 31.625 15.4414 32.0938 15.5 32.6211C15.8516 37.1328 18.8984 40.8242 23 42.2305V42.875C23 
            43.9297 23.8203 44.75 24.875 44.75H36.125C37.1797 44.75 38 43.9297 38 42.875V42.2305C42.043 40.7656 45.0898 37.0742
             45.4414 32.6211C45.5 32.0938 45.0898 31.625 44.5039 31.625ZM43.625 28.8125C43.5664 29.9258 43.2148 30.8633 42.6289 
             31.625H35.1875C34.6016 30.8633 34.25 29.9258 34.25 28.8125C34.25 26.2344 36.3008 24.125 38.9375 24.125C41.5156 24.125 
             43.625 26.2344 43.625 28.8125ZM17.375 26C17.375 23.9492 18.7227 19.9062 24.875 20.375C26.457 16.6836 28.6836 16.625 29.5625
              16.625C30.3828 16.625 32.6094 16.625 34.25 20.375C36.3008 20.2578 38.7031 20.3164 40.4609 22.4844C39.9336 22.3672 39.4062 
              22.3086 38.9375 22.25C35.3047 22.3086 32.375 25.2383 32.375 28.8125C32.375 29.8672 32.6094 30.8047 33.0195 31.625H30.5V20.8438C30.5 
              20.6094 30.2656 20.375 30.0312 20.375H29.0938C28.8008 20.375 28.625 20.6094 28.625 20.8438V30.3359L22.1211 23.832C22.0039 23.7148 21.8867 
              23.7148 21.7695 23.7148C21.6523 23.7148 21.5352 23.7148 21.418 23.832L20.7734 24.4766C20.6562 24.5938 20.5977 24.7109 20.5977 24.8281C20.5977
               24.9453 20.6562 25.0625 20.7734 25.1211L27.2773 31.625H23C19.8945 31.625 17.375 29.1055 17.375 26ZM37.3555 40.4727L36.125 40.8828V42.875H24.875V40.8828L23.5859 
               40.4727C20.4805 39.3594 18.1367 36.7227 17.4922 33.5H43.4492C42.8047 36.7227 40.5195 39.3594 37.3555 40.4727Z" fill="#18BA51"/>
             </svg>
         </button>
        <Typography variant="body1" sx={{ color: 'black' }}>
       Эрүүл, баталгаат орц
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card> 
     <Card sx={{ maxWidth:264,  height:155 }}>
      <CardContent>
        <button ><svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M40.3477 18.6875C39.1758 18.7363 33.3164 19.127 29.6543 21.0801C29.459 21.1777 29.1172 21.1777 28.9219 21.0801C25.2598 19.127 19.4004 18.7363 18.2285 
           18.6875C16.5684 18.6875 15.25 20.0059 15.25 21.6172V36.0703C15.25 37.6328 16.4707 38.8535 18.0332 38.9512C19.7422 39.0488 23.9902 39.3418 26.9199 40.416C27.2129 40.5137 
           27.457 40.5625 27.7012 40.5625H30.8262C31.1191 40.5625 31.3633 40.5137 31.6562 40.416C34.5859 39.3418 38.834 39.0488 40.543 38.9512C42.1055 38.8535 43.3262 37.6328 43.3262 
           36.0703V21.6172C43.375 20.0059 42.0078 18.6875 40.3477 18.6875ZM28.5312 38.2676C28.5312 38.707 28.1406 39.0488 27.75 39.0488C27.6523 39.0488 27.6035 39 27.5059 39C24.4297 37.8281 
           20.2305 37.4863 18.1309 37.3887C17.3984 37.3398 16.8125 36.8027 16.8125 36.0703V21.6172C16.8125 20.8848 17.4473 20.2988 18.2285 20.2988C19.1562 20.2988 24.1855 20.6406 27.6035 22.1543C28.1406 
           22.3984 28.4824 22.9355 28.4824 23.5215L28.5312 28.4043V38.2676ZM41.8125 36.0703C41.8125 36.8027 41.1777 37.3398 40.4453 37.3887C38.3457 37.4863 34.1465 37.8281 31.0703 39C30.9727 39 30.9238 39.0488 
           30.8262 39.0488C30.4355 39.0488 30.0449 38.707 30.0449 38.2676V28.4043L30.0938 23.5215C30.0938 22.9355 30.4355 22.3984 30.9727 22.1543C34.3906 20.6406 39.4199 20.2988 40.3477 20.2988C41.1289 20.2988 
           41.7637 20.8848 41.7637 21.6172V36.0703H41.8125Z" fill="#18BA51"/>
              </svg>
         </button>
        <Typography variant="body1" sx={{ color: 'black' }}>
         Хоолны өргөн сонголт
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>
    </div>

    <div className="flex flex-col mt-20">
        <div className="flex justify-center  gap-2">
            <svg width="22" height="22" className="mt-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z" fill="#18BA51"/>
         </svg>
          <h1 className="font-bold text-[22px] w-[1039px]"> Хямдралтай</h1>
     <button className="text-[#18BA51] flex gap-3">Бүгдийг харах<svg width="7" height="13"  className="mt-2" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.683594 0.289062L0.136719 0.808594C0.0273438 0.945312 0.0273438 1.16406 0.136719 1.27344L5.08594 6.25L0.136719 11.1992C0.0273438 11.3086 0.0273438 11.5273 0.136719 11.6641L0.683594 12.1836C0.820313 12.3203 1.01172 12.3203 1.14844 12.1836L6.89063 6.46875C7 6.33203 7 6.14062 6.89063 6.00391L1.14844 0.289062C1.01172 0.152344 0.820313 0.152344 0.683594 0.289062Z" fill="#18BA51"/>
</svg>
</button>
</div>
<div className="flex gap-10 justify-center">
        <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
  <img src="./eeg.png" alt="" />
      <CardContent>
        <h1 className="font-bold"> Өглөөний хоол</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">14,800₮</h1>
        <h1>16,800₮</h1>
        </div>
      </CardContent>
    </div>

     <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
     <img src="./tsairmag.png" alt="" />
      <CardContent>
        <h1 className="font-bold"> Зайрмаг</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">4,800₮</h1>
        <h1>6,800₮</h1>
        </div>
      </CardContent>
    </div>

     <div className="flex flex-col justify-center mt-10  w-[282px] h-[253px]">
      
       <img src="./cerail.png" alt="" />
      <CardContent>
      <h1 className="font-bold"> Өглөөний хоол</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">24,800₮</h1>
        <h1>26,800₮</h1>
        </div>
      </CardContent>
 
    </div> 
    <div className="flex flex-col justify-center mt-10 w-[282px] h-[253px]">
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
    </div>

       <div className="flex flex-col mt-20">
        <div className="flex justify-center   gap-2">
            <svg width="22" height="22" className="mt-2 " viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z" fill="#18BA51"/>
         </svg>
          <h1 className="font-bold text-[22px] w-[1039px] mr-32"> Үндсэн хоол</h1>
        </div>
<div className="flex gap-10 justify-center">
        <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
  <img src="./pizza.png" alt="" />
      <CardContent>
        <h1 className="font-bold"> Main Pizza </h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">34,800₮</h1>
        </div>
      </CardContent>
    </div>

     <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
     <img src="./meatpie.png" alt="" />
      <CardContent>
        <h1 className="font-bold"> Food tart</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">22,800₮</h1>
        </div>
      </CardContent>
    </div>

     <div className="flex flex-col  justify-center mt-10  w-[282px] h-[253px]">
       <img src="./jemm.png" alt="" />
      <CardContent>
      <h1 className="font-bold"> Өглөөний хоол</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">14,800₮</h1>
        </div>
      </CardContent>
    </div> 
    
    <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
  <img src="./soup.png" alt="" />
      <CardContent>
      <h1 className="font-bold text-[18px]">Зутан шөл</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">17,800₮</h1>
        </div>
      </CardContent>
    </div>
    </div>
    </div>
     <div className="flex flex-col mt-20">
        <div className="flex justify-center   gap-2">
            <svg width="22" height="22" className="mt-2 " viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z" fill="#18BA51"/>
         </svg>
          <h1 className="font-bold text-[22px] w-[1039px] mr-32"> Салад ба зууш</h1>
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
    
    <div className="flex flex-col  justify-center mt-10 w-[282px] h-[253px]">
  <img src="./applepie.png" alt="" />
      <CardContent>
      <h1 className="font-bold text-[18px]">Apple pie</h1>
        <div className="flex gap-3">
        <h1 className="text-[#18BA51]">34,800₮</h1>
        </div>
      </CardContent>
    </div>
    </div>
    </div>
     <div className="flex flex-col mt-20">
        <div className="flex justify-center   gap-2">
            <svg width="22" height="22" className="mt-2 " viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z" fill="#18BA51"/>
         </svg>
          <h1 className="font-bold text-[22px] w-[1039px] mr-32"> Хямдралтай</h1>
        </div>
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
  );}