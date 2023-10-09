import { useAppDispatch } from "../redux/hooks.tsx";
import { setNextPage, setPrevPage } from "../redux/slices/data/dataSlice";

function Pagination() {
  let dispatch = useAppDispatch();

  return (
    <section>
      <button onClick={() => dispatch(setPrevPage())}>{`<`}</button>
      <button onClick={() => dispatch(setNextPage())}>{`>`}</button>
    </section>
  );
}

export default Pagination;
