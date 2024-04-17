import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const handleScroll = (ref: any) => {
  console.log(ref);
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  const workPageRef = useRef(null);
  const aboutPageRef = useRef(null);

  return (
    <div className=" font-codeSaver">
      <Image
        className="h-screen w-screen fixed z-20 inset-0 object-cover opacity-50"
        src={"/clouds.jpg"}
        alt="clouds"
        width={1000}
        height={100}
      />

      <div className=" snap-y snap-mandatory grid h-full w-full overflow-scroll scroll-smooth">
        <div className="relative flex flex-col md:flex-row w-screen h-full bg-backgroundA snap-always overflow-scroll snap-start">
          <div className="relative border h-screen w-full  ">
            <div
              className=" font-akira block md:hidden cursor-pointer absolute z-50 w-full bottom-20 text-5xl text-center bg-blue-800 text-white"
              onClick={() => {
                console.log("clicked");
                handleScroll(aboutPageRef.current);
              }}
            >
              Arrow
            </div>
          </div>
          <div
            ref={aboutPageRef}
            className=" border h-screen bg-backgroundAB md:bg-backgroundA  w-full"
          ></div>
          <div
            className="cursor-pointer absolute z-50 w-80 bottom-20 text-5xl text-center bg-black text-white"
            onClick={() => {
              console.log("clicked");
              handleScroll(workPageRef.current);
            }}
          >
            Arrow
          </div>
        </div>
        <div
          ref={workPageRef}
          className=" w-screen h-screen bg-backgroundB snap-start snap-always	"
        ></div>
        <div className=" w-screen h-screen bg-backgroundC snap-start snap-always	"></div>
        <div className=" w-screen h-screen bg-backgroundD snap-start snap-always"></div>
      </div>
    </div>
  );
}
