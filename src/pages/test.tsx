import { ReactTyped } from "react-typed";
import Image from "next/image";

const MyComponent = () => (
  <div className="w-full h-full overflow-x-clip">
    <div className="font-codeSaver w-[500%] relative overflow-x-clip">
      <Image
        className="h-screen w-[500%] opacity-40 z-20 absolute bottom-0 top-0 animate-clouds object-cover"
        src={"/clowds.jpg"}
        alt="clouds"
        width={2000}
        height={100}
      />
      <div className="bg-blue-400 z-10">
        <div className="h-screen bg-red-100">
          <div className=" w-screen h-screen bg-backgroundB snap-start snap-always	relative">
            <div className="flex p-8 items-start justify-center">
              <div className="text-white z-50 mb-6 text-3xl underline-offset-4 underline">
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="font-codeSaver w-[500%] relative overflow-x-clip">
      <Image
        className="h-screen w-[500%] opacity-40 z-20 absolute bottom-0 top-0 animate-cloudsReverse object-cover"
        src={"/clowds.jpg"}
        alt="clouds"
        width={2000}
        height={100}
      />
      <div className="bg-blue-400 z-10">
        <div className="h-screen bg-red-100">
          <div className=" w-screen h-screen bg-backgroundAB snap-start snap-always	relative">
            <div className="flex p-8 items-start justify-center">
              <div className="text-white z-50 mb-6 text-3xl underline-offset-4 underline">
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyComponent;
