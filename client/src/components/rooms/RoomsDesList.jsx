const RoomsDesList = () => {
  return (
    <div className="pt-10 md:pt-0">
      <h1 className="text-2xl md:text-3xl pb-10 font-semibold">
        Whats included in this suite?
      </h1>
      <ul className="flex flex-col gap-4  list-disc  ">
        <li className=" text-xl">Private balcony</li>
        <li className=" text-xl">140x200 cm Elite bed</li>
        <li className=" text-xl">
          Upholstered seat beside the panoramic window
        </li>
        <li className=" text-xl">
          TV-UHD screen for watching mountaineering films
        </li>
        <li className=" text-xl">
          Writing desk with USB ports for documenting your adventures
        </li>
        <li className=" text-xl">Room safe for your top mountain photos</li>
        <li className=" text-xl">
          Service station with Lavazza coffee machine, kettle and tea
        </li>
        <li className=" text-xl">Bathroom with rain shower</li>
        <li className=" text-xl">Comfortable terry towels and bathrobes</li>
      </ul>
    </div>
  );
};

export default RoomsDesList;
