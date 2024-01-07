/* eslint-disable react/prop-types */
const EditFormUI = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-2 grid-cols-3 justify-center md:gap-4 md:place-items-center md:mx-auto"
    >
      {children}
    </form>
  );
};

export default EditFormUI;
