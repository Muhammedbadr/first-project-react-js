import Image from "next/image";
import Header from "./HeaderOfPage";
import MainSection from "./MainSection";
import Buttonsbtn from "./Buttonsbtn";
import TasksList from "./list_li";
import ChangingBtn from "./ChangingBtn";
import FormInp from "./FormInp"
import Scoreboard from "./Scoreboard"
const showbtninapp = true;

export default function Home() {

  
  return (
    <div className="flex flex-col text-center bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-center gap-8 py-12 w-[80%] mx-auto">
        <div className="flex flex-col space-y-2 w-[60%]">
          <MainSection/>
        </div>
        <div className="w-[30%]">
          <AppSideMenu/>
        </div>
      </div>
      <div className="flex justify-center text-black items-center py-8 bg-gray-200 p-6 shadow-md w-full">
          <TasksList />
      </div>
      <div className="flex justify-center text-black items-center py-8 bg-gray-300 p-6 shadow-md w-full">
        <ChangingBtn/>
      </div>
      <div className="flex justify-center text-black items-center py-8 bg-gray-200 p-6 shadow-md w-full">
      <FormInp/>
      </div>
      <div className="flex justify-center text-black items-center py-8 bg-gray-300 p-6 shadow-md w-full">
        <Scoreboard/>
      </div>
    </div>
  );
}

function AppSideMenu() {
  return showbtninapp ? <Buttonsbtn /> : null;
}
