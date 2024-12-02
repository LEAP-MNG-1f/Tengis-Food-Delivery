"use client";
import Menu from "../components/menu/Menu";
import Top from "../components/topbottom/Top";
import Bottom from "../components/topbottom/Bottom";

export default function Menuu() {
  return (
    <div>
      {" "}
      <div className="flex justify-center gap-[600px]">
        <Stack direction="row" spacing={5} ml={5} mt={5}>
          <svg
            width="41"
            className="mt-10"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.85882 9.53921L5.65369 17.41C5.12892 18.3951 4.86597 19.4762 4.86597 20.5587C4.86597 21.6414 5.12892 22.7224
    5.65369 23.7074L9.85882 31.5784C10.6339 33.0322 12.1497 33.9402 13.7992 33.9402H18.2658V31.7105H18.2644C17.4403 31.7105 
    16.6824 31.2572 16.2948 30.5304L12.0913 22.6579C11.74 22.0017 11.5649 21.281 11.5649 20.5587C11.5649 19.8364 11.74 19.1158
    12.0913 18.4597L16.2948 10.5873C16.6824 9.86028 17.4403 9.40709 18.2644 9.40709H18.2658V7.17725H13.7992C12.1497 7.17725 10.6339 8.08541 9.85882 9.53921Z"
              fill="black"
            />
            <path
              d="M35.3423 17.4101L31.1374 9.53927C30.3621 8.0853 28.8465 7.1773 27.197 7.1773H22.7302V9.40698H22.7318C23.5558 9.40698 
   24.3137 9.86034 24.7012 10.5872L28.9047 18.4596C29.2562 19.1158 29.4309 19.8365 29.4309 20.5588C29.4309 21.2811 29.2562 22.0017 
   28.9047 22.658L24.7012 30.5303C24.3137 31.2572 23.5558 31.7104 22.7318 31.7104H22.7302V33.9403H27.197C28.8465 33.9403 30.3621 
    33.0323 31.1374 31.5783L35.3423 23.7075C35.8669 22.7224 36.13 21.6413 36.13 20.5588C36.13 19.4763 35.8669 18.3952 35.3423 17.4101Z"
              fill="black"
            />
          </svg>
          <Link href={`/`}>
            <button className="font-bold hover:text-green-400">Нүүр</button>
          </Link>
          <Link href={`/menu`}>
            <button className="font-bold hover:text-green-400">
              ХООЛНЫ ЦЭС
            </button>
          </Link>
          <Link href={``}>
            <button className="font-bold hover:text-green-400">
              ХҮРГЭЛТИЙН БҮС
            </button>
          </Link>
        </Stack>
        <div className="flex gap-2 font-bold mt-10 mr-20">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.48977H16.21L11.83 0.929766C11.64 0.649766 11.32 0.509766 11 0.509766C10.68 0.509766 10.36 0.649766 10.17
0.939766L5.79 7.48977H1C0.45 7.48977 0 7.93977 0 8.48977C0 8.57977 0.00999996 8.66977 0.04 8.75977L2.58 18.0298C2.81 18.8698 
3.58 19.4898 4.5 19.4898H17.5C18.42 19.4898 19.19 18.8698 19.43 18.0298L21.97 8.75977L22 8.48977C22 7.93977 21.55 7.48977 21 
7.48977ZM11 3.28977L13.8 7.48977H8.2L11 3.28977ZM17.5 17.4898L4.51 17.4998L2.31 9.48977H19.7L17.5 17.4898ZM11 11.4898C9.9 11.4898 
9 12.3898 9 13.4898C9 14.5898 9.9 15.4898 11 15.4898C12.1 15.4898 13 14.5898 13 13.4898C13 12.3898 12.1 11.4898 11 11.4898Z"
              fill="black"
            />
          </svg>
          <p className="font-bold hover:text-green-400">Сагс</p>
        </div>
      </div>
      <Menu />
      <div
        className="bg-[#18BA51] w-full h-[545px] mt-10 flex flex-col items-center justify-center "
        style={{
          backgroundImage: "url(/food.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex gap-4 justify-center items-center">
          <svg
            width="33"
            height="27"
            viewBox="0 0 33 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.85978 2.54041L1.65425 10.412C1.12943 11.3972 0.866455 12.4783 0.866455 13.561C0.866455 14.6438 1.12943 15.7248 1.65425 16.71L5.85978 24.5817C6.63493 26.0357 8.15086 26.9437 9.80055 26.9437H14.2676V24.7139H14.2661C13.442 24.7139 12.6841 24.2605 12.2964 23.5336L8.09249 15.6604C7.74115 15.0041 7.56605 14.2833 7.56605 13.561C7.56605 12.8386 7.74115 12.1179 8.09249 11.4618L12.2964 3.58856C12.6841 2.86151 13.442 2.40828 14.2661 2.40828H14.2676V0.178223H9.80055C8.15086 0.178223 6.63493 1.08647 5.85978 2.54041Z"
              fill="white"
            />
            <path
              d="M31.3457 10.4121L27.1403 2.54047C26.365 1.08637 24.8493 0.17828 23.1996 0.17828H18.7324V2.40817H18.734C19.5581 2.40817 20.3161 2.86157 20.7036 3.58846L24.9075 11.4617C25.259 12.118 25.4338 12.8387 25.4338 13.561C25.4338 14.2834 25.259 15.0041 24.9075 15.6604L20.7036 23.5335C20.3161 24.2605 19.5581 24.7137 18.734 24.7137H18.7324V26.9438H23.1996C24.8493 26.9438 26.365 26.0357 27.1403 24.5816L31.3457 16.71C31.8704 15.7249 32.1335 14.6437 32.1335 13.561C32.1335 12.4784 31.8704 11.3972 31.3457 10.4121Z"
              fill="white"
            />
          </svg>
          <h1 className="font-bold text-white text-[20px] ">Food Delivery</h1>
        </div>
        <div className="flex justify-between mt-10 gap-5 font-bold text-white w-[1200px]">
          <Link href={`/`}>
            <button>Нүүр</button>
          </Link>
          <Link href={``}>
            <button>Холбоо барих</button>
          </Link>
          <Link href={`/menu`}>
            <button>Хоолны цэс</button>
          </Link>
          <Link href={``}>
            <button>Үйлчилгээний нөхцөл</button>
          </Link>
          <Link href={``}>
            <button>Хүргэлтийн бүс</button>
          </Link>{" "}
          <Link href={``}>
            <button>Нууцлалын бодлого</button>
          </Link>
        </div>
        <div className="flex gap-5 mt-10">
          <Link href={`https://www.facebook.com/`}>
            <button>
              <svg
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.875 20C38.875 29.6875 31.7656 37.7344 22.4688 39.1406V25.625H27L27.8594 20H22.4688V16.4062C22.4688 14.8438 23.25 13.3594 25.6719 13.3594H28.0938V8.59375C28.0938 8.59375 25.9062 8.20312 23.7188 8.20312C19.3438 8.20312 16.4531 10.9375 16.4531 15.7812V20H11.5312V25.625H16.4531V39.1406C7.15625 37.7344 0.125 29.6875 0.125 20C0.125 9.29688 8.79688 0.625 19.5 0.625C30.2031 0.625 38.875 9.29688 38.875 20Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
          <Link href={`https://www.instagram.com/accounts/login/`}>
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.01562C22.9219 9.01562 26.9844 13.0781 26.9844 18C26.9844 23 22.9219 26.9844 18 26.9844C13 26.9844 9.01562 23 9.01562 18C9.01562 13.0781 13 9.01562 18 9.01562ZM18 23.8594C21.2031 23.8594 23.7812 21.2812 23.7812 18C23.7812 14.7969 21.2031 12.2188 18 12.2188C14.7188 12.2188 12.1406 14.7969 12.1406 18C12.1406 21.2812 14.7969 23.8594 18 23.8594ZM29.4062 8.70312C29.4062 9.875 28.4688 10.8125 27.2969 10.8125C26.125 10.8125 25.1875 9.875 25.1875 8.70312C25.1875 7.53125 26.125 6.59375 27.2969 6.59375C28.4688 6.59375 29.4062 7.53125 29.4062 8.70312ZM35.3438 10.8125C35.5 13.7031 35.5 22.375 35.3438 25.2656C35.1875 28.0781 34.5625 30.5 32.5312 32.6094C30.5 34.6406 28 35.2656 25.1875 35.4219C22.2969 35.5781 13.625 35.5781 10.7344 35.4219C7.92188 35.2656 5.5 34.6406 3.39062 32.6094C1.35938 30.5 0.734375 28.0781 0.578125 25.2656C0.421875 22.375 0.421875 13.7031 0.578125 10.8125C0.734375 8 1.35938 5.5 3.39062 3.46875C5.5 1.4375 7.92188 0.8125 10.7344 0.65625C13.625 0.5 22.2969 0.5 25.1875 0.65625C28 0.8125 30.5 1.4375 32.5312 3.46875C34.5625 5.5 35.1875 8 35.3438 10.8125ZM31.5938 28.3125C32.5312 26.0469 32.2969 20.5781 32.2969 18C32.2969 15.5 32.5312 10.0312 31.5938 7.6875C30.9688 6.20312 29.7969 4.95312 28.3125 4.40625C25.9688 3.46875 20.5 3.70312 18 3.70312C15.4219 3.70312 9.95312 3.46875 7.6875 4.40625C6.125 5.03125 4.95312 6.20312 4.32812 7.6875C3.39062 10.0312 3.625 15.5 3.625 18C3.625 20.5781 3.39062 26.0469 4.32812 28.3125C4.95312 29.875 6.125 31.0469 7.6875 31.6719C9.95312 32.6094 15.4219 32.375 18 32.375C20.5 32.375 25.9688 32.6094 28.3125 31.6719C29.7969 31.0469 31.0469 29.875 31.5938 28.3125Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
          <Link href={`https://twitter.com/`}>
            <button>
              <svg
                width="41"
                height="34"
                viewBox="0 0 41 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.3594 8.875C36.3594 9.26562 36.3594 9.57812 36.3594 9.96875C36.3594 20.8281 28.1562 33.25 13.0781 33.25C8.39062 33.25 4.09375 31.9219 0.5 29.5781C1.125 29.6562 1.75 29.7344 2.45312 29.7344C6.28125 29.7344 9.79688 28.4062 12.6094 26.2188C9.01562 26.1406 5.96875 23.7969 4.95312 20.5156C5.5 20.5938 5.96875 20.6719 6.51562 20.6719C7.21875 20.6719 8 20.5156 8.625 20.3594C4.875 19.5781 2.0625 16.2969 2.0625 12.3125V12.2344C3.15625 12.8594 4.48438 13.1719 5.8125 13.25C3.54688 11.7656 2.14062 9.26562 2.14062 6.45312C2.14062 4.89062 2.53125 3.48438 3.23438 2.3125C7.29688 7.23438 13.3906 10.5156 20.1875 10.9062C20.0312 10.2812 19.9531 9.65625 19.9531 9.03125C19.9531 4.5 23.625 0.828125 28.1562 0.828125C30.5 0.828125 32.6094 1.76562 34.1719 3.40625C35.9688 3.01562 37.7656 2.3125 39.3281 1.375C38.7031 3.32812 37.4531 4.89062 35.7344 5.90625C37.375 5.75 39.0156 5.28125 40.4219 4.65625C39.3281 6.29688 37.9219 7.70312 36.3594 8.875Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" text-white  mt-10 w-[319px] h-[46px] text-[16px] flex flex-col items-center">
          <h1>© 2024 Pinecone Foods LLC </h1>
          <h1 className="mt-2">Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
        </div>
      </div>
    </div>
  );
}
