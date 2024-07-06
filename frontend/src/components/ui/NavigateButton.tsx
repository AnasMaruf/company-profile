import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NavigateButton = ({
  totalPost,
  currentPage,
  postPerPage,
  setCurrentPage,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const totalPages = Math.ceil(totalPost / postPerPage);
  // Get curent page number
  useEffect(() => {
    const page = searchParams.get("page");
    if (page) setCurrentPage(parseInt(page));
  }, [searchParams]);
  const nextPage = (e) => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      searchParams.set("page", nextPage.toString());
      navigate(`?${searchParams.toString()}`);
    }
  };
  const prevPage = (e) => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      searchParams.set("page", prevPage.toString());
      navigate(`?${searchParams.toString()}`);
    }
  };
  return (
    <div className="flex w-full items-center justify-center gap-5 my-10 text-xl font-lato">
      <button
        type="button"
        onClick={prevPage}
        className={`${
          !currentPage || currentPage == 1 ? "invisible" : "visible"
        }`}
      >
        <FaArrowLeft />
      </button>
      {/* Ke ubah button ngajajar jiga <= 1 2 3 ... 7 8 9 => */}
      <p>Page {currentPage}</p>
      <button
        type="button"
        onClick={nextPage}
        className={`${currentPage == totalPages ? "invisible" : "visible"}`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default NavigateButton;
