
import { usePagination } from "../../hooks/usePagination";
import style from "./Buttons.module.css"

export const PaginationButtons = ({pages,currentPage,totalPages}) => {

  const { handleNavigatePrev,handleNavigateNext,handleCurrentPage,activePage } = usePagination({currentPage,totalPages})

  return (
    <>
      <p>
        <button disabled={activePage === pages[0]} onClick={handleNavigatePrev}>Prev</button>
        {pages.map((p) => (
          <button className={(activePage === p) && style.active } key={p.id} onClick={() => handleCurrentPage.call(null, p)}>
            {p}
          </button>
        ))}
        <button disabled={activePage === pages[pages.length - 1]} onClick={handleNavigateNext}>Next</button>
      </p>

      <div>
        Page {currentPage} of {totalPages}
      </div>

    </>
  );
};
