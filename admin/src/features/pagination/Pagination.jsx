/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Pagination = ({ data, renderItem, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPost = data?.length;

  const lastPostIndex = currentPage * itemsPerPage;

  const fristPostIndex = lastPostIndex - itemsPerPage;

  const currentPost = data?.slice(fristPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className=" flex flex-col gap-2  justify-between min-h-[400px]">
      <div>
        {currentPost?.map((room) => (
          <div key={uuidv4()}>{renderItem(room)}</div>
        ))}
      </div>

      <div className=" flex gap-6 justify-center w-full bg-sky-50 p-1  rounded-b-lg">
        {pages?.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`rounded-lg px-3 py-1 text-sm ${
              currentPage === page ? "bg-sky-400 " : "bg-sky-200 scale-90"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
