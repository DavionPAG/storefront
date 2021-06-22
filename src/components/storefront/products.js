import {useDispatch, useSelector} from 'react-redux';
import {getPorducts} from "../../store/products";



function getProd(props) {

  const dispatch = useDispatch();
  const products = useSelector( (state) => state.products.products )

  function get() {
    dispatch( getPorducts() )
  }

  return (
    <>
    </>
  )

}

