"use client";
import { useEffect } from "react";
import { Card } from "./components/Card";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
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
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },]

  return (
     <div >
          <Stack direction="row" spacing={20} ml={20} mt={5}>
      <Button color="success">Нүүр</Button>
       <Button >ХООЛНЫ ЦЭС</Button>
        <Button>ХҮРГЭЛТИЙН БҮС</Button>
      
    </Stack>
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />  <Card img="" title="Breakfast" price={19800}/>
    </ImageListItem>
  ))}
</ImageList>
      
         <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />  <Card img="" title="Burger" price={14800}/>
    </ImageListItem>
  ))}
</ImageList>
   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />  <Card img="" title="Burger" price={14800}/>
    </ImageListItem>
  ))}
</ImageList> */}
     </div>
  );}