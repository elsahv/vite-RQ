import JtLogo from "../assets/jt-logo2.png";

// ? TURN INTO CONTACT??
const About = () => {
  return (
    <>
      <div id="main-container" className="border border-black">
        <div className="bg-munsell ">
          <div id="grid" className="grid grid-cols-2 h-[810px]">
            <div id="sq1">
              {" "}
              <img src={JtLogo} alt="" className="2xl:h-full 2xl:w-full" />
            </div>

            <div
              id="sq2"
              className="border-black border-l-2 flex justify-center items-center"
            >
              <div id="content-container" className="text-onyx m-5 px-5">
                <h2 className="text-4xl">About</h2>
                <p className=" mt-1 text-xl">
                  Welcome to the Running Quail, a Morongo Basin Community.
                </p>
                <p className="text-lg pt-1 py-1 my-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi odit quia quos voluptate provident facilis, alias
                  deleniti, quo libero nemo vitae beatae, placeat repudiandae
                  aut. Consequuntur, doloremque. Praesentium, debitis odio?
                </p>
                <p className="text-lg pt-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi odit quia quos voluptate provident facilis, alias
                  deleniti, quo libero nemo vitae beatae, placeat repudiandae
                  aut. Consequuntur, doloremque. Praesentium, debitis odio?Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Animi odit
                  quia quos voluptate provident facilis, alias deleniti, quo
                  libero nemo vitae beata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="TEST-SCREEN" className=""></div>
    </>
  );
};

export default About;
