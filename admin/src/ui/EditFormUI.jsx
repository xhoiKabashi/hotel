/* eslint-disable react/prop-types */
const EditFormUI = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2  justify-between md:gap-4 md:place-items-end md:mx-auto"
    >
      {children}
    </form>
  );
};

export default EditFormUI;
