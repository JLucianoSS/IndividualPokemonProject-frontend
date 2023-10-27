
import { usePagination } from "../../hooks/usePagination";
import style from "./Buttons.module.css"

export const PaginationButtons = ({pages,currentPage,totalPages}) => {

  const { handleNavigatePrev,handleNavigateNext,handleCurrentPage } = usePagination({currentPage,totalPages})

  return (
    <>
      <p>
        <button disabled={currentPage === pages[0]} onClick={handleNavigatePrev}>Prev</button>
        {pages.map((p) => (
          <button className={currentPage === p ? style.active : "" } key={p.id} onClick={() => handleCurrentPage.call(null, p)}>
            {p}
          </button>
        ))}
        <button disabled={currentPage === pages[totalPages.length - 1]} onClick={handleNavigateNext}>Next</button>
      </p>

      <div>
        Page {currentPage} of {totalPages}
      </div>
    </>
  );
};
