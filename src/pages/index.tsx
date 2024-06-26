import Image from "next/image";
import { useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const handleScroll = (ref: any) => {
  window.scrollTo({
    top: ref.offsetTop,
    behavior: "smooth",
  });
  console.log(ref.offsetTop);
};

export default function Home() {
  const { ref, inView } = useInView();
  const { ref: arrowRef, inView: arrowInView } = useInView();
  const { ref: arrowRef2, inView: arrow2InView } = useInView();
  const { ref: arrowRef3, inView: arrow3InView } = useInView();

  const navPageRef = useRef<HTMLInputElement>(null);
  const workPageRef = useRef<HTMLInputElement>(null);
  const aboutPageRef = useRef<HTMLInputElement>(null);
  const projectPageRef = useRef<HTMLInputElement>(null);
  const contactPageRef = useRef<HTMLInputElement>(null);

  const respondKeyDown = (e: any) => {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      console.log("down");
      if (
        aboutPageRef.current &&
        window.scrollY < aboutPageRef.current?.offsetTop - 1
      ) {
        handleScroll(aboutPageRef.current);
      } else if (
        workPageRef.current &&
        window.scrollY < workPageRef.current?.offsetTop - 1
      ) {
        handleScroll(workPageRef.current);
      } else if (
        projectPageRef.current &&
        window.scrollY < projectPageRef.current?.offsetTop - 1
      ) {
        handleScroll(projectPageRef.current);
      } else if (
        contactPageRef.current &&
        window.scrollY < contactPageRef.current?.offsetTop - 1
      ) {
        handleScroll(contactPageRef.current);
      }
    } else if (e.key === "ArrowUp") {
      if (
        projectPageRef.current &&
        window.scrollY > projectPageRef.current?.offsetTop + 1
      ) {
        handleScroll(projectPageRef.current);
      } else if (
        workPageRef.current &&
        window.scrollY > workPageRef.current?.offsetTop + 1
      ) {
        handleScroll(workPageRef.current);
      } else if (
        aboutPageRef.current &&
        window.scrollY > aboutPageRef.current?.offsetTop + 1
      ) {
        handleScroll(aboutPageRef.current);
      } else if (
        navPageRef.current &&
        window.scrollY >= navPageRef.current.offsetTop + 1
      ) {
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
          className="opacity-40 w-full fixed object-cover z-20 h-screen"
          src={"/clouds.jpg"}
          alt="clouds"
          width={2000}
          height={100}
        />
        <Image
          className={`h-screen w-[500%] opacity-55 z-10 absolute ${
            inView && "animate-cloudsFast md:animate-clouds"
          } object-cover`}
          src={"/longClouds.jpg"}
          alt="clouds"
          width={2000}
          height={100}
        />

        <div ref={navPageRef} className="grid h-full w-screen overflow-scroll">
          <div className="relative flex flex-col justify-center md:flex-row h-full bg-backgroundA snap-always overflow-scroll snap-start md:gap-8 lg:gap-12">
            <div
              ref={ref}
              className="max-w-[900px] relative min-h-screen  w-full flex items-center md:ml-6"
            >
              <div className="flex flex-col w-full pb-4 md:pb-12 pt-4 px-2 h-full md:h-fit items-center rounded-md border-2 bg-slate-400 bg-opacity-35 z-40">
                <div className="text-white  mt-4 font-akira text-4xl md:text-5xl lg:text-6xl text-center">
                  Hasan Ali
                </div>
                <div className="text-white font-akira text-lg md:text-xl lg:text-2xl text-center">
                  Front-end Developer
                </div>
                <div className="  flex flex-col md:flex-row items-start gap-4 md:gap-8 pr-4 ">
                  <div className="border-white animate-pulsate0 border-opacity-40 mt-12 border-8 h-44 w-44 z-30 relative flex justify-center items-center my-6 rounded-full ">
                    <Image
                      className=" border-8 opacity-70 border-opacity-80 border-white w-40 h-40 rounded-full overflow-clip"
                      src={"/hasan.png"}
                      alt="a photo of Hasan"
                      width="100"
                      height="100"
                    />
                  </div>
                  <ul className="text-white mb-8 z-50 md:mt-12 text-4xl  text-center md:text-left flex flex-col md:gap-6 gap-3">
                    <li
                      className={`py-1 px-3 rounded-md border-2 ${
                        inView && " md:bg-white md:bg-opacity-20"
                      } animate-pulsate transition-all md:hover:border-white hover:scale-110  active:border-white cursor-pointer hover:bg-white hover:bg-opacity-20`}
                      onClick={() => {
                        handleScroll(aboutPageRef.current);
                      }}
                    >
                      About
                    </li>
                    <li
                      className="py-1 px-3 animate-pulsate2 rounded-md cursor-pointer border-2 transition-all  hover:scale-110 border-white  md:hover:border-white hover:bg-white hover:bg-opacity-20 active:border-white"
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
                      className="py-1 px-3 animate-pulsate3 rounded-md cursor-pointer pointer transition-all border-2 hover:scale-110  border-white  md:hover:border-white active:border-white hover:bg-white hover:bg-opacity-20"
                    >
                      Projects
                    </li>
                    <li
                      onClick={() => {
                        handleScroll(contactPageRef.current);
                      }}
                      className="py-1 px-3 animate-pulsate4 rounded-md cursor-pointer pointer transition-all border-2 hover:scale-110 border-white  md:hover:border-white active:border-white hover:bg-white hover:bg-opacity-20"
                    >
                      Contact
                    </li>
                  </ul>
                </div>
                <div className="flex md:hidden absolute bottom-24  md:bottom-2 right-4 z-50 text-6xl opacity-60 text-white ">
                  <BiSolidDownArrow
                    className="cursor-pointer animate-delayedBounce"
                    onClick={() => {
                      handleScroll(aboutPageRef.current);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              ref={aboutPageRef}
              className="min-h-screen max-w-[900px] bg-backgroundAB md:bg-backgroundA px-2 md:pl-0 w-full flex flex-col gap-4 justify-center items-center"
            >
              <div className="text-white md:hidden font-akira text-4xl md:text-5xl lg:text-4xl text-center ">
                About
              </div>
              <div className="w-full hidden md:flex flex-col justify-start items-center text-white z-40 border-2 transition-transform rounded-md min-h-[525px] bg-slate-400 bg-opacity-35 text-2xl  xl:text-3xl p-10 md:p-4 lg:p-14">
                <ReactTyped
                  strings={[
                    " Est soluta totam qui molestiae impedit sit consectetur repellendus et nostrum iure qui tempora voluptates eos perspiciatis quia! Non molestiae iusto a deserunt velit quo quos repellendus et molestiae blanditiis et odit similique et voluptas placeat et dolorum",
                  ]}
                  startDelay={2500}
                  typeSpeed={30}
                />
              </div>
              <div className="w-full flex flex-col md:hidden justify-start items-center text-white z-40 border-2 transition-transform rounded-md min-h-[525px] bg-slate-400 bg-opacity-35 text-xl  xl:text-3xl p-10 md:p-4 lg:p-14">
                <ReactTyped
                  strings={[
                    " Est soluta totam qui molestiae impedit sit consectetur repellendus et nostrum iure qui tempora voluptates eos perspiciatis quia! Non molestiae iusto a deserunt velit quo quos repellendus et molestiae blanditiis et odit similique et voluptas placeat et dolorum",
                  ]}
                  typeSpeed={30}
                  startWhenVisible
                />
              </div>
            </div>
            <div
              ref={arrowRef}
              className="z-50 flex absolute bottom-24 md:bottom-2 right-4 text-6xl opacity-60  text-white"
            >
              <BiSolidDownArrow
                className=" cursor-pointer animate-delayedBounce2"
                onClick={() => {
                  handleScroll(workPageRef.current);
                }}
              />
            </div>
            <div className="flex md:hidden absolute bottom-24  md:bottom-2 right-4 z-40 text-6xl opacity-60  text-white">
              <BiSolidDownArrow
                className={`cursor-pointer ${arrowInView && "animate-rotate"}`}
                onClick={() => {
                  handleScroll(navPageRef.current);
                }}
              />
            </div>
          </div>
          <div
            ref={workPageRef}
            className=" w-screen h-screen bg-backgroundB snap-start snap-always	relative"
          >
            <div className="flex p-8 items-start justify-center">
              <div className="text-white  mt-10 font-akira text-4xl md:text-5xl lg:text-4xl text-center">
                My Work
              </div>
            </div>
            <div
              ref={arrowRef2}
              className="flex absolute bottom-24  md:bottom-2 right-4 z-50 text-6xl opacity-60 text-white "
            >
              <BiSolidDownArrow
                className={`cursor-pointer ${
                  arrow2InView && "animate-delayedBounce2"
                }`}
                onClick={() => {
                  handleScroll(projectPageRef.current);
                }}
              />
            </div>
            <div className="flex absolute bottom-24  md:bottom-2 right-4 z-40 text-6xl opacity-60  text-white">
              <BiSolidDownArrow
                className={`cursor-pointer ${arrow2InView && "animate-rotate"}`}
                onClick={() => {
                  handleScroll(aboutPageRef.current);
                }}
              />
            </div>
          </div>
          <div
            className=" w-screen h-screen bg-backgroundC snap-start snap-always relative"
            ref={projectPageRef}
          >
            <div className="flex p-8 items-start justify-center">
              <div className="text-white  mt-10 font-akira text-4xl md:text-5xl lg:text-4xl text-center">
                My Projects
              </div>
            </div>
            <div
              ref={arrowRef3}
              className="flex absolute bottom-24  md:bottom-2 right-4 z-50 text-6xl opacity-60 text-white"
            >
              <BiSolidDownArrow
                className={`cursor-pointer ${
                  arrow3InView && "animate-delayedBounce2"
                }`}
                onClick={() => {
                  handleScroll(contactPageRef.current);
                }}
              />
            </div>
            <div className="flex absolute bottom-24  md:bottom-2 right-4 z-40 text-6xl opacity-60  text-white">
              <BiSolidDownArrow
                className={`cursor-pointer ${arrow3InView && "animate-rotate"}`}
                onClick={() => {
                  handleScroll(workPageRef.current);
                }}
              />
            </div>
          </div>
          <div
            className="relative w-screen h-screen bg-backgroundD snap-start snap-always"
            ref={contactPageRef}
          >
            <div className="flex p-8 items-start justify-center">
              <div className="text-white  mt-10 font-akira text-4xl md:text-5xl lg:text-4xl text-center">
                Get in touch
              </div>
              <div className="flex absolute bottom-24  md:bottom-2 right-4 z-40 text-6xl opacity-60  text-white">
                <BiSolidDownArrow
                  className="cursor-pointer animate-rotate"
                  onClick={() => {
                    handleScroll(projectPageRef.current);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
