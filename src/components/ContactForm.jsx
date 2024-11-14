const ContactForm = () => {
  return (
    <div id="form-container" className="mt-1 pt-3 pl-1">
      <form id="IP-login-form" className="pt-5 bg-test flex flex-col gap-y-4">
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
      <p className="underline text-onyx mt-2">{"Don't"} have an account?</p>
    </div>
  );
};

export default ContactForm;
