import TestImg from "../assets/jtVertical.jpg";
import Header from "../components/Header";

import SignedInContent from "../components/SignedInContent";
import SignedOutContent from "../components/SignedOutContent";

const Test = () => {
  return (
    <>
      <SignedOutContent />

      {/* //*TEST HEADER v */}
      {/* <Header /> */}
      {/* //*TEST HEADER ^ */}
      <br />
      <br />
      <br />
      <br />
      <SignedInContent />
    </>
  );
};

export default Test;
