import { usePagination } from "../../hooks/usePagination";
import style from "./Buttons.module.css";

export const PaginationButtons = ({ pages, currentPage, totalPages }) => {
  const {
    handleNavigatePrev,
    handleNavigateNext,
    handleCurrentPage,
    groupIndex,
    totalPagesInGroups,
    visiblePages,
  } = usePagination({pages, currentPage, totalPages });

  return (
    <div className={style.container}>
      <div className={style.button_container}>
        <button
          className={style.pagination_button}
          disabled={currentPage === pages[0]}
          onClick={handleNavigatePrev}
        >
          Prev
        </button>

        {groupIndex > 0 && (
          <button
            className={style.pagination_button}
            key="ellipsis-star"
            disabled={true}
          >
            ...
          </button>
        )}
        {visiblePages.map((p) => (
          <button
            className={`${style.pagination_button} ${
              currentPage === p ? style.active : ""
            }`}
            key={p.id}
            onClick={() => handleCurrentPage.call(null, p)}
          >
            {p}
          </button>
        ))}

        {groupIndex < totalPagesInGroups - 1 && (
          <button
            className={style.pagination_button}
            key="ellipsis-end"
            disabled={true}
          >
            ...
          </button>
        )}

        <button
          className={style.pagination_button}
          disabled={currentPage === pages[pages.length - 1]}
          onClick={handleNavigateNext}
        >
          Next
        </button>
      </div>

      <div className={style.total_pages}>
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};
