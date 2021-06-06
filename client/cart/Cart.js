import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CartItems from "./CartItems";
import { StripeProvider } from "react-stripe-elements";
import config from "./../../config/config";
import Checkout from "./Checkout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
}));

export default function Cart() {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);

  const showCheckout = (val) => {
    setCheckout(val);
  };

  return (
    <div class="container">
      <section class="py-5">
        <h2 class="h5 text-uppercase mb-4">Shopping cart</h2>
        <div class="row">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <div class="table-responsive mb-4">
              <table class="table">
                <thead class="bg-light">
                  <tr>
                    <th class="border-0" scope="col">
                      {" "}
                      <strong class="text-small text-uppercase">Product</strong>
                    </th>
                    <th class="border-0" scope="col">
                      {" "}
                      <strong class="text-small text-uppercase">Price</strong>
                    </th>
                    <th class="border-0" scope="col">
                      {" "}
                      <strong class="text-small text-uppercase">
                        Quantity
                      </strong>
                    </th>
                    <th class="border-0" scope="col">
                      {" "}
                      <strong class="text-small text-uppercase">Total</strong>
                    </th>
                    <th class="border-0" scope="col">
                      {" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CartItems checkout={checkout} setCheckout={showCheckout} />
                </tbody>
              </table>
              {/* <Grid container spacing={8}>
        <Grid item xs={6} sm={6}>
          <CartItems checkout={checkout} setCheckout={showCheckout} />
        </Grid>
        {checkout && (
          <Grid item xs={6} sm={6}>
            <StripeProvider apiKey={config.stripe_test_api_key}>
              <Checkout />
            </StripeProvider>
          </Grid>
        )}
      </Grid> */}
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card border-0 rounded-0  bg-light">
              <div class="card-body">
                {checkout && (
                  <StripeProvider apiKey={config.stripe_test_api_key}>
                    <Checkout />
                  </StripeProvider>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
