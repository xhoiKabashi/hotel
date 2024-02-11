/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SkeletonUI from "../../ui/Skeleton";

const Pagination = ({ data, renderItem, itemsPerPage, onLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newArray = Array.from({ length: itemsPerPage });
  const [loadingComplete, setLoadingComplete] = useState(false);

  const totalPost = data?.length;
  const lastPostIndex = currentPage * itemsPerPage;
  const fristPostIndex = lastPostIndex - itemsPerPage;
  const currentPost = data?.slice(fristPostIndex, lastPostIndex);

  useEffect(() => {
    if (!onLoading) {
      // If loading is complete, set a timeout for at least one more second
      const timeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 2000); // 1000 milliseconds = 1 second

      // Clear timeout if component unmounts or loading becomes true again
      return () => clearTimeout(timeout);
    }
  }, [onLoading]);

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col gap-2 justify-between min-h-[400px]">
      <div className="flex flex-col gap-2">
        {onLoading &&
          !loadingComplete && // Render Skeleton UI only if loading is true and loading is not complete
          newArray.map((index) => (
            <div
              key={index}
              className="p-4 items-center rounded-lg grid border-1  bg-slate-100 grid-cols-5 gap-3 border-2"
            >
              <div className="col-span-2">
                <SkeletonUI />
              </div>
              <div className="col-span-2">
                <SkeletonUI />
              </div>
              <div className="col-span-1">
                <SkeletonUI />
              </div>
            </div>
          ))}
        {(!onLoading || loadingComplete) && // Render actual content if loading is false or loading is complete
          currentPost?.map((room) => (
            <div key={uuidv4()}>{renderItem(room)}</div>
          ))}
      </div>

      <div className="flex gap-6 justify-center w-full bg-sky-50 p-1 rounded-b-lg">
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
