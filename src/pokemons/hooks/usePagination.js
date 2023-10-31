
import { useDispatch } from 'react-redux';
import { onNavigateNext,onNavigatePrev,onCurrentPage } from '../../redux/actions-types';

export const usePagination = ({pages,currentPage,totalPages}) => {
  
    const dispatch = useDispatch();
    const itemsPerPage = 8;
  
    const handleNavigatePrev = () => {
      if (currentPage != 1) {
        dispatch(onNavigatePrev());
      }
    };
    const handleNavigateNext = () => {
      if (currentPage !== totalPages) {
        dispatch(onNavigateNext());
      }
    };
    const handleCurrentPage = (p) => {
      dispatch(onCurrentPage(p));
    };

    const totalPagesInGroups = Math.ceil(pages.length / itemsPerPage);
    const groupIndex = Math.floor((currentPage - 1) / itemsPerPage);
  
    const startItem = groupIndex * itemsPerPage;
    const endItem = Math.min(startItem + itemsPerPage, pages.length);
    const visiblePages = pages.slice(startItem, endItem);
 

    return{
        handleNavigatePrev,
        handleNavigateNext,
        handleCurrentPage,
        totalPagesInGroups,
        groupIndex,
        visiblePages

    }   
}
