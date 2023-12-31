import { ButtonBlue, ButtonWhite } from "@/components";
import Successcart from "@/components/success-cart";
import Link from "next/link";
const Quiz = () => {
  return (
    <main className="h-screen bg-[#F9F9F9] ">
      <div className="rounded-2xl pl-5">
        <h1 className="text-[#202020] font-bold text-[34px]">Generate Quiz</h1>
        <p className="text-[18px] font-normal text-[#A5A5A5]">
          Lorem ipsum dolor sit amet
        </p>

        <div className="flex">
          {/* White Background Container  Start*/}
          <div className=" flex flex-col  pl-10 pr-28 pb-4  bg-white  rounded-3xl   ">
            <div className="flex justify-center pt-5 pb-10 ">
              <h1 className="text-2xl font-bold text-[#CACED8]">Quiz</h1>
            </div>
            <div className="flex gap-4 items-center mb-10 ">
              <ButtonBlue
                text="Details"
                className="text-[16px] font-bold  text-center items-center justify-center  "
                borderRadius="6px"
                height="42px"
                width="128px"
              />
              <Link href="/dashboard/teacher/quiz/question">
                <ButtonWhite
                  text="Question"
                  className="text-[16px] font-bold  text-center items-center justify-center  "
                  borderRadius="6px"
                  height="42px"
                  width="128px"
                />
              </Link>
            </div>
            <form>
              <div className="   flex mt-5 item flex-col mb-6  ">
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Quiz Name
                    </label>
                    <input
                      type="text"
                      required
                      label="Quiz Name"
                      className="mb-5 w-[451px] h-[44px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Quiz Type
                    </label>

                    <select
                      required
                      class="w-[344px] h-[44px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                    >
                      <option selected></option>
                      <option>Graded</option>
                      <option>Ungraded</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-medium text-[#083A50]">
                    Option
                  </label>
                  <div className="flex gap-8 ">
                    <div className="flex gap-3 ">
                      <input
                        type="checkbox"
                        className=" w-[21px] h-[19px] justify-center    "
                      />
                      <label className=" text-base font-medium text-[#083A50]">
                        Shuffle Answer
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className=" w-[21px] h-[19px] " />
                      <label className=" text-base font-medium text-[#083A50]">
                        Time Limit
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      type="Number"
                      required
                      className=" w-[88px] h-[44px] rounded-md border-[1px] solid border-[#CACED8] outline-none pl-4 shadow-lg  "
                    />
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Min
                    </label>
                  </div>
                </div>
              </div>
              <h1 className=" text-base font-medium text-[#083A50]">Assign</h1>
              <div className="flex flex-col pl-16 pt-10 bg-[#FFFFFF] rounded-xl gap-20 shadow-xl p-4">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label
                      for="grading"
                      class="mb-2 text-base font-medium text-[#083A50]"
                    >
                      To
                    </label>
                    <select
                      id="grading"
                      required
                      class="w-[295px] h-[40px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                    >
                      <option selected></option>
                      <option>Everyone</option>
                      <option>SDA</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Due
                    </label>
                    <input
                      type="date"
                      required
                      className=" w-[295px] h-[40px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4 "
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label className="mb-2 text-base font-medium text-[#083A50]">
                      Available from
                    </label>
                    <input
                      type="date"
                      required
                      className=" w-[295px] h-[40px] rounded-lg border-[2px] solid border-[#CACED8] outline-none pl-4"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col  ">
                      <label className="mb-2 text-base font-medium text-[#083A50]">
                        Until
                      </label>
                      <input
                        type="date"
                        required
                        className=" w-[295px] h-[40px] rounded-xl border-[2px] solid border-[#CACED8] outline-none pl-4"
                      />
                    </div>
                    <div className="flex justify-end">
                      <ButtonWhite
                        text="+Add "
                        type="submit"
                        className="text-[16px] font-bold  items-center justify-center text-center border-[2px] solid border-[#CACED8] outline-none pl-4  "
                        borderRadius="6px"
                        height="40px"
                        width="152px"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex pl-10 pb-10 gap-6">
                  <ButtonWhite
                    text="Cancel"
                    className="text-base font-bold  text-center items-center justify-center"
                    borderRadius="6px"
                    height="42px"
                    width="128px"
                  />
                  <ButtonBlue
                    text="Save"
                    className="text-base font-bold  text-center items-center justify-center"
                    borderRadius="6px"
                    height="42px"
                    width="128px"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Quiz;
