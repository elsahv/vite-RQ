import TestImg from "../assets/jtVertical.jpg";
import PrimoseImg from "../assets/primoseFlower.jpg";
import JtLogo from "../assets/jt-logo2.png";

const items = [
  {
    title: "item1",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
    img: TestImg,
  },
  {
    title: "item2",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
  },
  {
    title: "item3",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
  },
  {
    title: "item4",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
  },
  {
    title: "item5",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
  },
  {
    title: "item6 ",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure tempora corporis unde, amet fugiat nulla hic modi sequi repellat architecto! Neque eveniet asperiores quae repellendust fugiat nul",
  },
];

const Test = () => {
  return (
    <>
      <div id="wrapper" className="">
        <div id="container">
          <div id="grid" className="flex md:flex-row flex-col-reverse">
            <div id="sq1" className="">
              <div id="grid-wrapper" className="">
                <div
                  id="grid-container"
                  className="2xl:p-5 2xl:m-5 relative left-0 md:w-3/4 w-full "
                >
                  <ul
                    id="grid"
                    className="md:p-5 p-3 md:mx-5 mx-1 grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4"
                  >
                    {items.map((item) => (
                      <div
                        id="sq"
                        className="bg-munsell text-platinum rounded-md p-3 border border-black "
                      >
                        <img src={PrimoseImg} alt="" className="" />
                        <div id="content-container" className="p-1 mb-2">
                          <h2 className="pt-2 font-semibold">{item.title}</h2>
                          <p className="2xl:text-lg text-sm text-lavender">
                            {item.p}
                          </p>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div id="sq2" className="bg-">
              <div id="aside" className="">
                <div
                  id="aside-wrapper"
                  className=" md:w-1/4 w-full border-l-2 border-lavender md:absolute relative right-0 "
                >
                  <div className="py-5 px-4  text-onyx aside-container">
                    <h2 className="font-bold text-lg">Welcome!</h2>
                    <p className="mb-3">
                      The Running Quail is a future online community based in
                      Morongo Basin, CA. A PLACE TO PROMOTE YOUR MORONGO BASIN
                      BUSINESS
                    </p>
                    <img
                      src={TestImg}
                      alt=""
                      className="rounded border border-black"
                    />
                    <br />
                    <br />
                    <br />
                    <h3>Fill out survey</h3>
                    <p>Looking forward to hearing from you!</p>
                    <div id="form-wrapper" className="">
                      <div id="form-container" className="mr-5">
                        <form htmlFor="">
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="border rounded w-full py-2 px-3 mt-5 mb-2"
                            placeholder="name"
                            required
                          />
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="border rounded w-full mt-1 py-2 px-3 mb-2"
                            placeholder="email"
                            required
                          />
                          <textarea
                            id="description"
                            name="description"
                            className="border rounded w-full py-2 px-3"
                            rows="4"
                            placeholder="Add any job duties, expectations, requirements, etc"
                          ></textarea>
                          <div id="btn-container" className="pl-1 pt-1 mt-1">
                            <button className="border border-teal opacity-70 hover:opacity-100 hover:bg-gray-200 px-1 rounded text-md">
                              subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEST V */}
      <>
        {/* <div id="main-container" className="">
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
                  <h2 className="text-4xl text-platinum">About</h2>
                  <p className=" mt-1 text-xl text-platinum">
                    Welcome to the Running Quail, a Morongo Basin Community.
                  </p>
                  <p className="text-lg text-platinum pt-1 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi odit quia quos voluptate provident facilis, alias
                    deleniti, quo libero nemo vitae beatae, placeat repudiandae
                    aut. Consequuntur, doloremque. Praesentium, debitis odio?
                  </p>
                  <p className="text-lg text-platinum pt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi odit quia quos voluptate provident facilis, alias
                    deleniti, quo libero nemo vitae beatae, placeat repudiandae
                    aut. Consequuntur, doloremque. Praesentium, debitis
                    odio?Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Animi odit quia quos voluptate provident facilis,
                    alias deleniti, quo libero nemo vitae beata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    </>
  );
};

export default Test;
