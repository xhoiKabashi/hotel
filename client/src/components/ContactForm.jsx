const ContactForm = () => {
  return (
    <form className="space-y-4 max-w-2xl py-10 flex flex-col">
      <div className="flex flex-col group">
        <label htmlFor="" className="group-active:font-semibold">
          Your name
        </label>
        <input type="text" className="border-b-2 h-10 focus:outline-none" />
      </div>
      <div className="flex flex-col group">
        <label htmlFor="" className="group-active:font-semibold">
          Your Email
        </label>
        <input type="email" className="border-b-2 h-10 focus:outline-none " />
      </div>
      <div className="flex flex-col group">
        <label htmlFor="" className="group-active:font-semibold">
          Subject
        </label>
        <input type="text" className="border-b-2 h-10 focus:outline-none" />
      </div>

      <div className="flex flex-col group">
        <label htmlFor="" className="group-active:font-semibold">
          Your message
        </label>
        <input
          type="text"
          className="border-b-2 h-10 active  focus:outline-none"
        />
      </div>
      <button className="bg-sky-500 px-14 py-2  text-white m-auto rounded-full active:scale-[0.94] active:bg-sky-900 hover:bg-sky-900 transition-color duration-500 ease-in-out">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
