import Image from "next/image";
import { useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

const handleScroll = (ref: any) => {
  window.scrollTo({
    top: ref.offsetTop,
    behavior: "smooth",
  });
  console.log(ref.offsetTop);
};

export default function Home() {
  const navPageRef = useRef(null);
  const workPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const projectPageRef = useRef(null);
  const contactPageRef = useRef(null);

  const respondKeyDown = (e: any) => {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      console.log("down");
      if (window.scrollY < aboutPageRef.current?.offsetTop) {
        handleScroll(aboutPageRef.current);
      } else if (window.scrollY < workPageRef.current?.offsetTop) {
        handleScroll(workPageRef.current);
      } else if (window.scrollY < projectPageRef.current?.offsetTop) {
        handleScroll(projectPageRef.current);
      } else if (window.scrollY < contactPageRef.current?.offsetTop) {
        handleScroll(contactPageRef.current);
      }
    } else if (e.key === "ArrowUp") {
      if (window.scrollY > projectPageRef.current?.offsetTop) {
        handleScroll(projectPageRef.current);
      } else if (window.scrollY > workPageRef.current?.offsetTop) {
        handleScroll(workPageRef.current);
      } else if (window.scrollY > aboutPageRef.current?.offsetTop) {
        handleScroll(aboutPageRef.current);
      } else if (window.scrollY > navPageRef.current?.offsetTop) {
        handleScroll(navPageRef.current);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", respondKeyDown);

    return () => {
      window.removeEventListener("keydown", respondKeyDown);
      console.log("removed");
    };
  }, []);

  return (
    <div className="w-full h-full overflow-x-clip">
      <div className="font-codeSaver w-[500%] relative overflow-x-clip">
        <Image
          className="opacity-40 fixed object-cover z-20 h-screen"
          src={"/clouds.jpg"}
          alt="clouds"
          width={2000}
          height={100}
        />

        <Image
          className="h-screen w-[500%] opacity-30 z-20 absolute bottom-0 top-0 animate-clouds object-cover"
          src={"/longClouds.jpg"}
          alt="clouds"
          width={2000}
          height={100}
        />

        <div className="grid h-full w-screen overflow-scroll">
          <div className="relative flex flex-col justify-center md:flex-row h-full bg-backgroundA snap-always overflow-scroll snap-start md:gap-8 lg:gap-12">
            <div
              ref={navPageRef}
              className="max-w-[900px] relative min-h-screen  w-full flex items-center md:ml-6"
            >
              <div className="flex flex-col w-full pb-4 md:pb-12 pt-4 px-2 items-center rounded-md border-2 md:bg-slate-400 md:bg-opacity-30 z-50">
                <div className="text-white mt-4 font-akira text-4xl md:text-5xl lg:text-6xl text-center">
                  Hasan Ali
                </div>
                <div className="text-white font-akira text-lg md:text-xl lg:text-2xl text-center">
                  Front-end Developer
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pr-4">
                  <div className="border-white border-opacity-40 mt-12 border-8 h-44 w-44 z-40 relative flex justify-center items-center my-6 rounded-full ">
                    <Image
                      className=" border-8 opacity-90 border-opacity-80 border-white w-40 h-40 rounded-full overflow-clip"
                      src={"/hasan.png"}
                      alt="a photo of Hasan"
                      width="100"
                      height="100"
                    />
                  </div>
                  <ul className="text-white mb-8 z-50 md:mt-12 text-4xl  text-center md:text-left flex flex-col md:gap-6 gap-3">
                    <li
                      className="py-1 px-3 rounded-md border border-white transition-all md:hover:border-white active:border-white cursor-pointer hover:bg-white hover:bg-opacity-20"
                      onClick={() => {
                        handleScroll(aboutPageRef.current);
                      }}
                    >
                      About
                    </li>
                    <li
                      className="py-1 px-3 rounded-md cursor-pointer border transition-all md:border-transparent border-white  md:hover:border-white hover:bg-white hover:bg-opacity-20 active:border-white"
                      onClick={() => {
                        handleScroll(workPageRef.current);
                      }}
                    >
                      Work
                    </li>
                    <li
                      onClick={() => {
                        handleScroll(projectPageRef.current);
                      }}
                      className="py-1 px-3 rounded-md cursor-pointer pointer transition-all border md:border-transparent border-white  md:hover:border-white active:border-white hover:bg-white hover:bg-opacity-20"
                    >
                      Resume
                    </li>
                    <li
                      onClick={() => {
                        handleScroll(contactPageRef.current);
                      }}
                      className="py-1 px-3 rounded-md cursor-pointer pointer transition-all border md:border-transparent border-white  md:hover:border-white active:border-white hover:bg-white hover:bg-opacity-20"
                    >
                      Contact
                    </li>
                  </ul>
                </div>
                <div className="flex md:hidden absolute bottom-2 right-4 z-50 text-5xl opacity-60 text-white ">
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
              className="min-h-screen max-w-[900px] bg-backgroundAB md:bg-backgroundA pr-6 w-full flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-start items-center text-white z-50 md:border-2 rounded-md min-h-[525px] md:bg-slate-400 md:bg-opacity-30 md:text-2xl text-3xl xl:text-3xl p-10 md:p-4 lg:p-14">
                <div className=" md:hidden z-50 mb-6 text-3xl underline-offset-4 underline">
                  A bit about
                </div>
                <ReactTyped
                  strings={[
                    " Est soluta totam qui molestiae impedit sit consectetur repellendus et nostrum iure qui tempora voluptates eos perspiciatis quia! Non molestiae iusto a deserunt velit quo quos repellendus et molestiae blanditiis et odit similique et voluptas placeat et dolorum",
                  ]}
                  typeSpeed={30}
                  startWhenVisible
                />
              </div>
            </div>
            <div className="flex absolute bottom-2 right-4 z-50 text-6xl opacity-60  text-white">
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
            className=" w-screen h-screen bg-backgroundB snap-start snap-always	relative"
          >
            {/* <Image
              className={`h-screen opacity-40 z-20 absolute right-0 left-0 object-cover`}
              src={"/clouds.jpg"}
              alt="clouds"
              width={2000}
              height={100}
            /> */}
            <div className="flex p-8 items-start justify-center">
              <div className="text-white z-50 mb-6 text-3xl underline-offset-4 underline">
                Work{" "}
              </div>
            </div>
            <div className="flex absolute bottom-2 right-4 z-50 text-5xl opacity-60 text-white ">
              <BiSolidDownArrow
                className="cursor-pointer animate-bounce"
                onClick={() => {
                  handleScroll(projectPageRef.current);
                }}
              />
            </div>
          </div>
          <div
            className=" w-screen h-screen bg-backgroundC snap-start snap-always relative"
            ref={projectPageRef}
          >
            {/* <Image
              className={`h-screen opacity-40 z-20 absolute  right-0 left-0 object-cover`}
              src={"/clouds.jpg"}
              alt="clouds"
              width={2000}
              height={100}
            /> */}
            <div className="flex p-8 items-start justify-center">
              <div className="text-white z-50 mb-6 text-3xl underline-offset-4 underline">
                Resume
              </div>
            </div>
            <div className="flex absolute bottom-2 right-4 z-50 text-5xl opacity-60 text-white">
              <BiSolidDownArrow
                className="cursor-pointer animate-bounce"
                onClick={() => {
                  handleScroll(contactPageRef.current);
                }}
              />
            </div>
          </div>
          <div
            className=" w-screen h-screen bg-backgroundD snap-start snap-always"
            ref={contactPageRef}
          >
            <div className="flex p-8 items-start justify-center">
              <div className="text-white z-50 mb-6 text-3xl underline-offset-4 underline">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
