
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onNavigateNext,onNavigatePrev,onCurrentPage } from '../../redux/actions-types';

export const usePagination = ({currentPage,totalPages}) => {
  
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
  
    const handleNavigatePrev = () => {
      if (currentPage != 1) {
        dispatch(onNavigatePrev());
        setActivePage(currentPage - 1);
      }
    };
    const handleNavigateNext = () => {
      if (currentPage !== totalPages) {
        dispatch(onNavigateNext());
        setActivePage(currentPage +1);
      }
    };
    const handleCurrentPage = (p) => {
      dispatch(onCurrentPage(p));
      setActivePage(p);
    };


    return{
        handleNavigatePrev,
        handleNavigateNext,
        handleCurrentPage,
        activePage
    }   
}
