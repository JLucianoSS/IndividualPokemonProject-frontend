
import { useDispatch } from 'react-redux';
import { onNavigateNext,onNavigatePrev,onCurrentPage } from '../../redux/actions-types';

export const usePagination = ({currentPage,totalPages}) => {
  
    const dispatch = useDispatch();
  
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
 

    return{
        handleNavigatePrev,
        handleNavigateNext,
        handleCurrentPage,

    }   
}
