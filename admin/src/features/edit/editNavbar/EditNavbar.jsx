import Button from "../../../ui/Button";

const EditNavbar = () => {
  return (
    <div className="flex flex-col items-start justify-start space-y-5 ">
      <div className="bg-slate-50 w-full flex justify-between px-4 py-4">
        Edit Logo:
        <form className="flex justify-center  gap-4">
          <label className="relative cursor-pointer bg-blue-500 rounded-md font-medium text-white shadow-md hover:bg-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
            <span className="flex items-center">
              <span className="ml-2 text-sm">Select Photo</span>
            </span>
            <input type="file" className="sr-only" />
          </label>
          <input type="text" placeholder="Enter Url" />
          <Button />
        </form>
      </div>
      <div className="bg-slate-50 w-full">hey</div>
      <div className="bg-slate-50 w-full">hey</div>
    </div>
  );
};

export default EditNavbar;
