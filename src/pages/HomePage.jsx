import JtLogo from "../assets/jt-logo2.png";
import ContactForm from "../components/ContactForm";

// ? TURN INTO CONTACT??
const HomePage = () => {
  return (
    <>
      <div id="main-container" className="">
        <div className="bg-munsell h-[810px] border border-black">
          <div id="grid" className="grid grid-cols-2 h-full">
            <div id="sq1">
              {" "}
              <img src={JtLogo} alt="" className="2xl:h-full 2xl:w-full" />
            </div>

            <div
              id="sq2"
              className="border-black border-l-2 flex justify-center items-center"
            >
              <div id="content-container" className=" text-onyx mb-5 pb-5">
                <h2 className="font- text-4xl text-">Hi there,</h2>
                <p className="text-2xl">
                  Welcome to the Running Quail, a Morongo Basin Community.
                </p>

                {/*//* <!-10/22/24 --CURRENTLY: BUILDING FORM v-*--*--*--*--*--*--*--> */}
                <ContactForm />
                {/*//* <!--*--*--*--CURRENTLY ^-*--*--*--*--*--*--*--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="TEST-SCREEN" className="h-screen bg-"></div> */}
    </>
  );
};

export default HomePage;
