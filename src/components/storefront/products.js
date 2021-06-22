import {useDispatch, useSelector} from 'react-redux';

import {} from "../../store/products";
// import * as actions from "./store/counter.js"; // actions.increment


function getProd(props) {

  const dispatch = useDispatch();
  const count = useSelector( (state) => state.products.products )

  function get() {
    dispatch( increment() )
  }



  return (
    <>
      <h2>EZ Counter: {count}</h2>
      <button onClick={subtractOne}>-</button>
      <button onClick={addOne}>+</button>
    </>
  )

}

export default Counter;
