"use client";
import "../style/style.css";
import React, { useState } from "react";
import UploadIcon from "./Icons/uploadIcon";
import Carousel from "better-react-carousel";
import { stringify } from "querystring";
import Image from "next/image";
import DownloadIcon from "./Icons/backIcon";

export default function Home() {
  const [image, setImage] = useState<any>();
  const [isDisplay, setIsDisplay] = useState(false);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      setIsDisplay(true);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleBack = (datas: any) => {
    setIsDisplay(false);
    console.log("click");
  };

  const img = image;

  return (
    <div>
      <div
        className={`flex h-85vh w-full justify-center ${
          isDisplay ? "hidden" : "block"
        } bg-primary-200 items-center`}
      >
        <div className="text-center relative">
          <input
            type="file"
            className="absolute h-full w-full left-0 top-0 right-0 opacity-0"
            onChange={onChange}
          />
          <button className="text-text-secondary">
            <UploadIcon w={50} h={50} />
          </button>
          <p className="text-3xl text-text-primary">Select a Image</p>
        </div>
        <div className="absolute bottom-0 left-0 text-center py-4 bg-primary-100 w-full rounded-t-lg ">
          <button className="rounded-full p-3 text-primary-100 bg-text-secondary">
            <UploadIcon w={20} h={20} />
          </button>
        </div>
      </div>
      <div className={`${isDisplay ? "block" : "hidden"} h-full`}>
        <div className="h-85 relative">
          <Carousel
            showDots={true}
            hideArrow={true}
            mobileBreakpoint={10}
            scrollSnap={true}
          >
            <Carousel.Item>
              <div
                className={`my-0 relative -z-10 w-full h-full bg-no-repeat bg-${img} bg-center bg-cover bg-[red] after:bg-[green] after:content-none after:absolute after:top-0 after:left-0 after:h-full after:w-full z-10`}
              ></div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className={`my-0 mx-auto relative -z-10 w-full h-full bg-no-repeat bg-center bg-cover after:bg-[darkblue] after:content-none after:absolute after:top-0 after:left-0 after:h-full after:w-full z-10`}
              ></div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className={`my-0 mx-auto relative -z-10 w-full h-full bg-${image} bg-no-repeat bg-center bg-cover after:bg-[green] after:content-none after:absolute after:top-0 after:left-0 after:h-full after:w-full z-10`}
              />
            </Carousel.Item>
            <Carousel.Item>
              <div />
            </Carousel.Item>
            <Carousel.Item>
              <div
                className={`my-0 mx-auto relative -z-10 box-[700px] bg-${image} bg-no-repeat bg-center bg-cover after:bg-[red] after:content-none after:absolute after:top-0 after:left-0 after:h-full after:w-full z-10`}
              />
            </Carousel.Item>
            <Carousel.Item>
              <div
                className={`my-0 mx-auto relative -z-10 box-[700px] bg-${image} bg-no-repeat bg-center bg-cover after:bg-[black] after:content-none after:absolute after:top-0 after:left-0 after:h-full after:w-full z-10`}
              />
            </Carousel.Item>
          </Carousel>

          <button onClick={handleBack} className="absolute left-4 top-4">
            <DownloadIcon />
          </button>
          <button className="absolute right-2 top-2 rounded-full bg-text-secondary text-white-100 p-4"></button>
        </div>
      </div>
    </div>
  );
}
