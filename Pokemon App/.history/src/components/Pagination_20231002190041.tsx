import { useAppDispatch, useAppSelector } from "../redux/hooks.tsx";
import {
  setNextPage,
  setPrevPage,
  setCurrentPage,
} from "../redux/slices/data/dataSlice";

function Pagination() {
  let dispatch = useAppDispatch();
  let maxPages = useAppSelector((state) => state.dataReducer.totalPages);
  console.log(maxPages);
  return (
    <section>
      <button onClick={() => dispatch(setPrevPage())}>{`<`}</button>
      <button onClick={() => dispatch(setCurrentPage(1))}>1</button>
      <button onClick={() => dispatch(setCurrentPage(16))}>16</button>
      <button onClick={() => dispatch(setNextPage())}>{`>`}</button>
    </section>
  );
}

export default Pagination;
