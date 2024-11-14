import TestImg from "../assets/jtVertical.jpg";
import PrimoseImg from "../assets/primoseFlower.jpg";

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
            <div id="sq1" className="bg-">
              <div id="grid-wrapper" className="">
                <div
                  id="grid-container"
                  className="2xl:p-5 2xl:m-5  relative left-0 md:w-3/4 w-full "
                >
                  <ul
                    id="grid"
                    className="p-5 mx-5 grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4"
                  >
                    {items.map((item) => (
                      <div
                        id="sq"
                        className="bg-munsell text- p-3 border border-black"
                      >
                        <img src={PrimoseImg} alt="" />
                        <div id="content-container" className="p-1 mb-2">
                          <h2 className="pt-2 font-semibold">{item.title}</h2>
                          <p>{item.p}</p>
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
                  className=" md:w-1/4 w-full border-l border-black md:absolute relative right-0 "
                >
                  <div className="py-5 px-4  text-onyx aside-container">
                    <h2 className="font-bold text-lg">Welcome!</h2>
                    <p className="mb-3">
                      The Running Quail is a future online community based in
                      Morongo Basin, CA.
                    </p>
                    <img src={TestImg} alt="" />
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
    </>
  );
};

export default Test;
