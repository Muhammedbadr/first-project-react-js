import Image from "next/image";
import Header from "./HeaderOfPage";
import MainSection from "./MainSection";
import Buttonsbtn from "./Buttonsbtn";

export default function Home() {
  return (
    <div className="flex flex-col text-center bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-center gap-4 py-10 w-[80%] mx-auto">
        <div className="flex flex-col space-y-1 w-[50%]">
          <MainSection name="Muhammad" lastname="Jack Ali" />
          <MainSection name="Ali" lastname="Jack Ali" />
          <MainSection name="Omar" lastname="Elon" />
        </div>
        <div className=" w-[30%]">
          <Buttonsbtn btn=""/>
        </div>
      </div>
    </div>
  );
}
