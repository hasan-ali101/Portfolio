import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

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
        <div className="relative flex flex-col md:flex-row h-full bg-backgroundA snap-always overflow-scroll snap-start md:gap-12">
          <div className="relative min-h-screen w-full ">
            <div className="flex flex-col w-full pt-16 px-2 items-center">
              <div className="text-white font-akira text-4xl md:text-5xl lg:text-6xl  text-center">
                Hasan Ali
              </div>
              <div className="text-white font-akira text-lg md:text-xl lg:text-2xl text-center">
                Front-end Developer
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="border-white border-opacity-40 border-8 h-44 w-44 z-40 relative flex justify-center items-center my-6 rounded-full ">
                  <Image
                    className=" border-8 opacity-90 border-opacity-80 border-white w-40 h-40 rounded-full overflow-clip"
                    src={"/hasan.png"}
                    alt="a photo of Hasan"
                    width="100"
                    height="100"
                  />
                </div>
                <ul className="text-white mb-8 z-50 md:mt-12 text-4xl text-center md:text-left flex flex-col md:gap-6 gap-3">
                  <li
                    className="p-1  border border-transparent md:border-white hover:border-white active:border-white cursor-pointer "
                    onClick={() => {
                      handleScroll(aboutPageRef.current);
                    }}
                  >
                    About
                  </li>
                  <li
                    className="p-1 cursor-pointer border border-transparent hover:border-white active:border-white"
                    onClick={() => {
                      handleScroll(workPageRef.current);
                    }}
                  >
                    Work
                  </li>
                  <li className="p-1  cursor-pointer pointer border border-transparent hover:border-white active:border-white">
                    Projects
                  </li>
                  <li className=" p-1 cursor-pointer pointer border border-transparent hover:border-white active:border-white">
                    Contact
                  </li>
                </ul>
              </div>
              <div className="flex md:hidden absolute bottom-2 right-4 z-50  text-6xl opacity-60 text-white ">
                <BiSolidDownArrow
                  className="cursor-pointer animate-bounce"
                  onClick={() => {
                    handleScroll(aboutPageRef.current);
                  }}
                />
              </div>
            </div>
          </div>

          <div
            ref={aboutPageRef}
            className="  min-h-screen bg-backgroundAB md:bg-backgroundA mr-8  w-full flex flex-col justify-center items-center"
          >
            <div className="text-white z-50 md:border  md:text-2xl text-3xl lg:text-3xl p-10 text-center md:p-4 lg:p-14">
              <div className="text-white  md:hidden z-50 mb-6 text-3xl underline-offset-4 underline">
                A bit about
              </div>
              Est soluta totam qui molestiae impedit sit consectetur repellendus
              et nostrum iure qui tempora voluptates eos perspiciatis quia! Non
              molestiae iusto a deserunt velit quo quos repellendus et molestiae
              blanditiis et odit similique et voluptas placeat et dolorum
            </div>
          </div>
          <div className="hidden md:flex absolute bottom-2 right-4 z-50 text-6xl opacity-60  text-white">
            <BiSolidDownArrow
              className=" cursor-pointer animate-bounce"
              onClick={() => {
                handleScroll(workPageRef.current);
              }}
            />
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
