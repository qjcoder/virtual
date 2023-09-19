import { ButtonBlue, ButtonWhite, Header } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className=" min-h-screen bg-white flex flex-col p-5">
      <Header />
      <section className="flex">
        {/* left */}
        <div className="flex flex-1  flex-col  p-6  items-center ">
          <div className="text-[36px] font-bold text-center">
            Getting <span className="text-[#0093EF]">Quality</span> <br></br>
            Education Is Now More <span className="text-[#0093EF]">Easy</span>
          </div>
          <div>
            <Image src="/signin.png" width={500} height={500} />
          </div>
        </div>
        {/* Right  */}
        <div className="flex flex-1">
          <div className="flex flex-col   bg-[#8EAFC2] p-5 rounded-3xl  h-[600px] w-[500px] ">
            <div className="flex items-center flex-col">
              <Image
                className="w-[90px] h-[90px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-2"
                src="/admin.png"
                alt="Profile Picture"
                width={88}
                height={88}
              />
              <p className="text-base font-roboto font-normal mt-3">
                Login account with
              </p>
              <div className="flex gap-6 mt-6">
                {/* <!-- Github --> */}
                <Link href={"#"}>
                  <Image
                    className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
                    src="/github.png"
                    alt="github-logo"
                    width={50}
                    height={50}
                  />
                </Link>
                {/* <!-- Google --> */}
                <Image
                  className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
                  src="/google.png"
                  alt="Google-Logo"
                  width={100}
                  height={100}
                />

                {/* <!-- Linkedin --> */}
                <Image
                  className="w-10 h-10 p-1 rounded-full ring-2 bg-white "
                  src="/linkedIn.png"
                  alt="LinkedIn-Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-center justify-between gap-2 my-8  ">
                <Link href="/signin">
                  <ButtonWhite text="As a Teacher" />
                </Link>
                <p>or</p>
                <ButtonBlue text="As a Student" />
              </div>
              {/* Form */}
              <div className=" flex flex-col items-center gap-8">
                <form className="flex flex-col gap-4">
                  <div className="flex justify-center-center gap-5  ">
                    <Image
                      src="/user.png"
                      alt="User Icon"
                      width={32}
                      height={32}
                      className="w-10 h-10 p-1 rounded-full bg-white border text-center"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex justify-center-center gap-5  ">
                    <Image
                      src="/password.png"
                      alt="Password Icon"
                      width={52}
                      height={52}
                      className="w-10 h-10 p-1 rounded-full bg-white border text-center"
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      className="w-[340px] h-[38px] px-4 py-2 text-[#797979] bg-[#F9F7F7] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </form>
                <div className="mb-6">
                  <Link href="/dashboard/student">
                    <ButtonBlue text="Sign in" />
                  </Link>
                </div>
              </div>
              {/* End of Form */}
              <Link href="/signup/student" className="text-[#0093EF] ml-52">
                Forget Password?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
