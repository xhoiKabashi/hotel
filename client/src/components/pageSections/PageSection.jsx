/* eslint-disable react/prop-types */
const PageSection = ({ title, content, imageUrl, position }) => {
  console.log(typeof position);
  return (
    <div className="grid gap-2 md:grid-cols-2 items-center grid-row-1 md:px-40 px-5 py-8 ">
      <div
        className="md:text-3xl italic font-extralight"
        style={{ order: position }}
      >
        <h1 className="py-2 font-semibold">{title}</h1>
        {content}
      </div>
      <div className="md:w-[500px]" style={{ order: 2 || 2 }}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default PageSection;
