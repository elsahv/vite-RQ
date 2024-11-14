import { Link } from "react-router-dom";
import JtLogo from "../assets/jt-logo2.png";

const SignedOutContent = () => {
  return (
    <>
      {/* TEST V */}
      <>
        <div id="main-container" className="">
          <div className=" bg-munsell border-2 border-black ">
            <div id="grid" className="grid grid-cols-2 ">
              <div id="sq1">
                {" "}
                <img src={JtLogo} alt="" className="2xl:h-[650px] 2xl:w-full" />
              </div>

              <div
                id="sq2"
                className="border-black border-l-2 flex justify-center items-center"
              >
                <div id="content-container" className="m-5 px-5">
                  <h2 className="text-4xl  ">Need to Login!</h2>
                  <p className=" mt-1 text-xl  ">
                    Welcome to the Running Quail, a Morongo Basin Community.
                  </p>
                  <p className="text-lg   pt-1 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi odit quia quos voluptate provident facilis, alias
                    deleniti, quo libero nemo vitae beatae, placeat repudiandae
                    aut. Consequuntur, doloremque. Praesentium, debitis odio?
                  </p>
                  <p className="text-lg   pt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi odit quia quos voluptate provident facilis, alias
                    deleniti, quo libero nemo vitae beatae, placeat repudiandae
                    aut. Consequuntur, doloremque. Praesentium, debitis
                    odio?Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Animi odit quia quos voluptate provident facilis,
                    alias deleniti, quo libero nemo vitae beata
                  </p>

                  <div id="form-container" className="mt-1 pt-3 pl-1">
                    <form
                      id="IP-login-form"
                      className="pt-5 bg-test flex flex-col gap-y-4"
                    >
                      {/* //? suddenly inspired by onyx and munsell theme as primary colors */}
                      <input
                        placeholder="enter email"
                        className="rounded w-3/4 h-10 pl-2 bg-onyx border hover:border-test2 mb-2"
                      />
                      <input
                        placeholder="enter password"
                        className="rounded w-3/4 h-10 pl-2 bg-onyx border hover:border-test2"
                      />
                      {/* //? suddenly inspired by onyx and munsell theme as primary colors */}

                      <div id="btn-wrapper" className="mt-3 ">
                        <button className="bg- px-3 py-1 rounded border border-onyx opacity-80 hover:opacity-100  hover:bg-test2 hover:font-extrabold">
                          send
                        </button>
                      </div>
                    </form>
                    <p className="underline text-onyx mt-2">
                      {"Don't"} have an account?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SignedOutContent;
