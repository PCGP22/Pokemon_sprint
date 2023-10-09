import { useAppDispatch } from "../redux/hooks.tsx";
import {
  setNextPage,
  setPrevPage,
  setCurrentPage,
} from "../redux/slices/data/dataSlice";

function Pagination() {
  let dispatch = useAppDispatch();

  return (
    <section>
      <button onClick={() => dispatch(setPrevPage())}>{`<`}</button>
      <button onClick={() => dispatch(setCurrentPage(5))}>5</button>
      <button onClick={() => dispatch(setNextPage())}>{`>`}</button>
    </section>
  );
}

export default Pagination;
