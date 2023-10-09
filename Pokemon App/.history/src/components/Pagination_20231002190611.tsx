import { useAppDispatch, useAppSelector } from "../redux/hooks.tsx";
import {
  setNextPage,
  setPrevPage,
  setCurrentPage,
} from "../redux/slices/data/dataSlice";

function Pagination() {
  let dispatch = useAppDispatch();
  let maxPages = useAppSelector((state) => state.dataReducer.totalPages);
  let currentPage = useAppSelector((state) => state.dataReducer.currentPage);
  let pagesButtons = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];

  return (
    <section>
      <button onClick={() => dispatch(setPrevPage())}>{`<`}</button>
      <button onClick={() => dispatch(setCurrentPage(1))}>1</button>
      {pagesButtons.map((p) => {
        if (p > 1 && p < maxPages)
          return <button onClick={() => dispatch(setCurrentPage(p))}>p</button>;
      })}
      <p>...</p>
      <button onClick={() => dispatch(setCurrentPage(16))}>16</button>
      <button onClick={() => dispatch(setNextPage())}>{`>`}</button>
    </section>
  );
}

export default Pagination;
