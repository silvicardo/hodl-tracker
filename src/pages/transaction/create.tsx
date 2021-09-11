import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { useFormik } from "formik";
import firebase from "../../../firebase/initFirebase";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

type FirebaseTransactionDocument = {
  amount: number;
  confirmDate: string;
  currencyName: string;
  exchangeTransactionId: string;
  fee: number;
  type: string;
};

const addTransactionDocument = async (transaction: FirebaseTransactionDocument) => {
  await firebase.firestore().collection("transactions").doc(transaction.exchangeTransactionId).set(transaction);
};

export interface ICreateProps {}

const db = firebase.firestore();

export default function Create({}: ICreateProps) {
  const [votes, votesLoading, votesError] = useCollection(firebase.firestore().collection("transactions"), {});
  if (!votesLoading && votes) {
    const transactions = votes.docs.map((doc) => doc.data());
    console.log(transactions);
  }
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      amount: 0,
      confirmDate: "2020-08-24T10:30",
      currencyName: "",
      exchangeTransactionId: "",
      fee: 0,
      type: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      addTransactionDocument({ ...values, confirmDate: firebase.firestore.time })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  });
  console.log("formik values", formik.values);
  return (
    <div>
      <h1>Register a transaction</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-number"
                label="Amount"
                type="number"
                name={"amount"}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={formik.handleChange}
                value={formik.values.amount}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-number"
                label="Fee"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                name={"fee"}
                onChange={formik.handleChange}
                value={formik.values.fee}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-basic"
                label="Exchange Transaction Id"
                variant="outlined"
                name={"exchangeTransactionId"}
                value={formik.values.exchangeTransactionId}
                onChange={formik.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                id="datetime-local"
                label="Confirm Date"
                type="datetime-local"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                name={"confirmDate"}
                value={formik.values.confirmDate}
                onChange={formik.handleChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={"currencyName"}
                value={formik.values.currencyName}
                onChange={formik.handleChange}
              >
                <MenuItem value={"EUR"}>EUR</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Payment type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={"type"}
                value={formik.values.type}
                onChange={formik.handleChange}
              >
                <MenuItem value={"Fiat-PG Deposit"}>Credit Card</MenuItem>
                <MenuItem value={"Fiat-Manual Deposit"}>Wire Transfer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type={"submit"}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
