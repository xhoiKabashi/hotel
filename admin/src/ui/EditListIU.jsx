import Button from "./Button";

const EditListIU = () => {
  return (
    <div className="flex flex-col items-start justify-start space-y-5 ">
      <div className="bg-slate-50 w-full flex justify-between px-4 py-4">
        Edit Logo:
        <form className="flex justify-center">
          <input type="file" placeholder="Enter Photo" />
          <input type="text" placeholder="Enter Url" />
          <Button></Button>
        </form>
      </div>
    </div>
  );
};

export default EditListIU;
