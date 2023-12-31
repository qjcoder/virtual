import Image from "next/image";
import { ButtonBlue } from "../components/index";
import Link from "next/link";

const CourseCard = () => {
  return (
    <div className=" w-[296px] flex flex-col items-center ml-6 mr-3 my-6 pb-6 rounded-2xl shadow-lg   ">
      <Image
        className="w-full h-40 rounded-t-2xl "
        src="/image.png"
        alt="Course 1"
        height={200}
        width={200}
      />
      <div className=" items-center px-4 ">
        <div className="h-10 w-[225px] flex items-center rounded-full  bg-white  -translate-y-4 translate-x-5   ">
          <div className="flex  justify-between">
            <div className="z-40">
              <Image src="/Ander.png" width={30} height={30} />
            </div>
            <div className="z-30 -ml-3 ">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-20 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-10 -ml-3">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
            <div className="z-0 -ml-3  ">
              <Image src="/Bartender.png" width={30} height={30} />
            </div>
          </div>
          <div className="text-[#263238] text-sm font-normal items-center ml-3 mr-3">
            +
          </div>
          <div>
            <span className="text-[#263238] text-sm font-medium mr-1">40</span>
            <sup className="text-[#263238] text-sm font-medium">students</sup>
          </div>
        </div>
        <div className=" flex  flex-col justify-between gap-3">
          <p className="text-[10px] font-normal text-[#777795] ">
            1 - 28 July 2022
          </p>
          <div className="text-[15px] text-[#0B7077] font-extrabold mb-2">
            Product Management Basic - Course
          </div>
          <p className="text-[10px] font-normal  text-gray-700 text-base">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
          <Link href="/dashboard/teacher/details">
            <ButtonBlue
              text="Details"
              className="text-[12px] text-center font-medium items-center justify-center  "
              borderRadius="6px"
              fontSize="12px"
              fontWeight="500"
              height="34px"
              width="79px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
