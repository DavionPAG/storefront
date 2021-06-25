import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/products";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Details from '../../components/products/details.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ShowProducts (props) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.currentProducts)
  
  const classes = useStyles();

  function showToys() {
    dispatch(actions.prodAction('toys'))
  }

  function showGames() {
    dispatch(actions.prodAction('games'))
  }

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <div>
          <button onClick={showToys}>Toys</button>
          <span> | </span>
          <button onClick={showGames}>Games</button>
        </div>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {products.map((data, idx) => (
              <Grid key={idx} item>
                <Details product={data}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )

}

