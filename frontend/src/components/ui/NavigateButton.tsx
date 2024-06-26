import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const NavigateButton = ({
  currentPage,
  setCurrentPage,
  totalPost,
  postPerPage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const totalPages = Math.ceil(totalPost / postPerPage);
  const nextPage = (e) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigate(`/latest?page=${currentPage + 1}`);
    }
  };
  const prevPage = (e) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/latest?page=${currentPage - 1}`);
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
