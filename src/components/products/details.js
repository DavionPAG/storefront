import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
  keyboard: {
    backgroundColor: "lightpurple"
  }
});

function Details(props) {

  const classes = useStyles();

  console.log(props.person)

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.keyboard}>
        <CardMedia
          className={classes.media}
          image={`https://source.unsplash.com/random?`}
          title="PlaceHolder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Desc.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
        <Button size="small" color="primary">
          View Detials
        </Button>
      </CardActions>
    </Card>
  );
}

export default Details;
