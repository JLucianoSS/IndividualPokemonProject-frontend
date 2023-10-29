
import { usePagination } from "../../hooks/usePagination";
import style from "./Buttons.module.css"

export const PaginationButtons = ({pages,currentPage,totalPages}) => {

  const { handleNavigatePrev,handleNavigateNext,handleCurrentPage } = usePagination({currentPage,totalPages})

  return (
    <>
      <div className={style.button_container}>
        <button className={style.pagination_button} disabled={currentPage === pages[0]} onClick={handleNavigatePrev}>Prev</button>
        {pages.map((p) => (
          <button className={`${style.pagination_button} ${currentPage === p ? style.active : ""}`} key={p.id} onClick={() => handleCurrentPage.call(null, p)}>
            {p}
          </button>
        ))}
        <button className={style.pagination_button} disabled={currentPage === pages[pages.length - 1]} onClick={handleNavigateNext}>Next</button>
      </div>

      {/* <div>
        Page {currentPage} of {totalPages}
      </div> */}
    </>
  );
};
