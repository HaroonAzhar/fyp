import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { read, listRelated } from "./api-product.js";
import { Link } from "react-router-dom";
import Suggestions from "./../product/Suggestions";
import AddToCart from "./../cart/AddToCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  flex: {
    display: "flex",
  },
  card: {
    padding: "24px 40px 40px",
  },
  subheading: {
    margin: "24px",
    color: theme.palette.openTitle,
  },
  price: {
    padding: "16px",
    margin: "16px 0px",
    display: "flex",
    backgroundColor: "#93c5ae3d",
    fontSize: "1.3em",
    color: "#375a53",
  },
  media: {
    height: 200,
    display: "inline-block",
    width: "50%",
    marginLeft: "24px",
  },
  icon: {
    verticalAlign: "sub",
  },
  link: {
    color: "#3e4c54b3",
    fontSize: "0.9em",
  },
  addCart: {
    width: "35px",
    height: "35px",
    padding: "10px 12px",
    borderRadius: "0.25em",
    backgroundColor: "#5f7c8b",
  },
  action: {
    margin: "8px 24px",
    display: "inline-block",
  },
}));

export default function Product({ match }) {
  const classes = useStyles();
  const [product, setProduct] = useState({ shop: {} });
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read({ productId: match.params.productId }, signal).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.productId]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listRelated(
      {
        productId: match.params.productId,
      },
      signal
    ).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSuggestions(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.productId]);

  const imageUrl = product._id
    ? `/api/product/image/${product._id}?${new Date().getTime()}`
    : "/api/product/defaultphoto";
  return (
    <section class="py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6">
            <div class="row m-sm-0">
              <div class="col-sm-10 order-1 order-sm-2">
                <img class="img-fluid" src={imageUrl} alt="..aaa."></img>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <h1>{product.name}</h1>
            <p class="text-muted lead">${product.price}</p>
            <p class="text-small mb-4">{product.description}</p>
            <div class="row align-items-stretch mb-4">
              <div class="col-sm-5 pr-sm-0">
                <div class="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                  <span class="small text-uppercase text-gray mr-4 no-select">
                    Quantity
                  </span>
                  <div class="quantity">
                    <button class="dec-btn p-0">
                      <i class="fas fa-caret-left"></i>
                    </button>
                    <input
                      class="form-control border-0 shadow-0 p-0"
                      type="text"
                      value="1"
                    ></input>
                    <button class="inc-btn p-0">
                      <i class="fas fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 pl-sm-0">
                <a
                  class="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                  href="cart.html"
                >
                  Add to cart
                </a>
              </div>
            </div>
            <ul class="list-unstyled small d-inline-block">
              <li class="px-3 py-2 mb-1 bg-white text-muted">
                <strong class="text-uppercase text-dark">Category:</strong>
                <a class="reset-anchor ml-2" href="#">
                  {product.category}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* {related rpoducts here} */}
      </div>
    </section>
  );
}
{
  /* <Grid container spacing={10}>
  <Grid item xs={7} sm={7}>
    <Card className={classes.card}>
      <CardHeader
        title={product.name}
        subheader={product.quantity > 0? 'In Stock': 'Out of Stock'}
        action={
          <span className={classes.action}>
            <AddToCart cartStyle={classes.addCart} item={product}/>
          </span>
        }
      />
      <div className={classes.flex}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={product.name}
        />
        <Typography component="p" variant="subtitle1" className={classes.subheading}>
          {product.description}<br/>
          <span className={classes.price}>$ {product.price}</span>
          <Link to={'/shops/'+product.shop._id} className={classes.link}>
            <span>
              <Icon className={classes.icon}>shopping_basket</Icon> {product.shop.name}
            </span>
          </Link>
        </Typography>

      </div>
    </Card>
  </Grid>
  {suggestions.length > 0 &&
    (<Grid item xs={5} sm={5}>
      <Suggestions  products={suggestions} title='Related Products'/>
    </Grid>)}
</Grid> */
}
