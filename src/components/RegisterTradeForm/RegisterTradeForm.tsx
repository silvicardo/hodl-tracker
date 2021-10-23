import React from "react";
import { useFormik } from "formik";
import { CURRENCIES_SLUGS_MAP } from "../../constants";
import firebase from "../../../firebase/initFirebase";
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export interface IRegisterTradeFormProps {
  userId: string;
}

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
  },
}));

export const RegisterTradeForm = ({ userId }: IRegisterTradeFormProps) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      confirmDate: "2021-08-24T10:30",
      initialCurrencyName: CURRENCIES_SLUGS_MAP.EUR,
      destinationCurrencyName: CURRENCIES_SLUGS_MAP.BTC,
      initialCurrencySpentAmount: "0",
      destinationCurrencyPrice: "0",
      destinationCurrencyFilledAmount: "0",
      destinationCurrencyFeePaid: "0",
      exchangeTradeId: "",
      type: "buy",
    },
    onSubmit: async (values) => {
      try {
        const formattedTrades = {
          ...values,
          confirmDate: new Date(values.confirmDate),
          userId,
          currencyPair: `${values.initialCurrencyName}-${values.destinationCurrencyName}`,
        };
        await firebase.firestore().collection("trades").doc(formattedTrades.exchangeTradeId).set(formattedTrades);
        formik.resetForm();
      } catch (e) {
        alert("failed saving to firebase");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="type-select-label">Trade Type</InputLabel>
            <Select
              labelId="type-select"
              id="type-select"
              name={"type"}
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <MenuItem value={"buy"}>Buy</MenuItem>
              <MenuItem value={"sell"}>Sell</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="exchange-trade-id"
              label="Exchange Trade Id"
              variant="standard"
              name={"exchangeTradeId"}
              value={formik.values.exchangeTradeId}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
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
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="initial-currency-select-label">Initial Currency</InputLabel>
            <Select
              labelId="initial-currency-select"
              id="initial-currency-select"
              name={"initialCurrencyName"}
              value={formik.values.initialCurrencyName}
              onChange={formik.handleChange}
            >
              {Object.values(CURRENCIES_SLUGS_MAP).map((currencyName) => (
                <MenuItem key={currencyName} value={currencyName}>
                  {currencyName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="initial-currency-spent-amount"
              label="Initial Currency Spent Amount"
              type="number"
              name={"initialCurrencySpentAmount"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={formik.handleChange}
              value={formik.values.initialCurrencySpentAmount}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="initial-currency-select-label">Destination Currency</InputLabel>
            <Select
              labelId="destination-currency-select"
              id="destination-currency-select"
              name={"destinationCurrencyName"}
              value={formik.values.destinationCurrencyName}
              onChange={formik.handleChange}
            >
              {Object.values(CURRENCIES_SLUGS_MAP).map((currencyName) => (
                <MenuItem key={currencyName} value={currencyName}>
                  {currencyName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="destination-currency-price"
              label="Destination Currency Price"
              type="number"
              name={"destinationCurrencyPrice"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={formik.handleChange}
              value={formik.values.destinationCurrencyPrice}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="destination-currency-filled-amount"
              label="Destination Currency Filled Amount"
              type="number"
              name={"destinationCurrencyFilledAmount"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={formik.handleChange}
              value={formik.values.destinationCurrencyFilledAmount}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="destination-currency-fee-paid"
              label="Destination Currency Fee Paid"
              type="number"
              name={"destinationCurrencyFeePaid"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={formik.handleChange}
              value={formik.values.destinationCurrencyFeePaid}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type={"submit"}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
