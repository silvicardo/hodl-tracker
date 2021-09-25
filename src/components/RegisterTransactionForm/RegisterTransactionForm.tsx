import React, { useEffect } from "react";
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { CURRENCIES_SLUGS_MAP, PAYMENT_METHODS_SLUGS_MAP } from "../../constants";
import firebase from "../../../firebase/initFirebase";

export interface IRegisterTransactionFormProps {
  userId: number;
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

export const RegisterTransactionForm = ({ userId }: IRegisterTransactionFormProps) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      amount: 0,
      confirmDate: "2021-08-24T10:30",
      currencyName: CURRENCIES_SLUGS_MAP.eur,
      exchangeTransactionId: "",
      fee: 0,
      paymentMethod: PAYMENT_METHODS_SLUGS_MAP.wireTransfer,
      type: "deposit",
    },
    onSubmit: async (values) => {
      try {
        const formattedTransaction = {
          ...values,
          confirmDate: new Date(values.confirmDate),
          userId,
        };
        await firebase
          .firestore()
          .collection("transactions")
          .doc(formattedTransaction.exchangeTransactionId)
          .set(formattedTransaction);
        formik.resetForm();
      } catch (e) {
        alert("failed saving to firebase");
      }
    },
  });

  useEffect(() => {
    if (formik.values.type === PAYMENT_METHODS_SLUGS_MAP.wireTransfer) {
      formik.setFieldValue("fee", 0);
    }
  }, [formik.values.type]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Transaction Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"type"}
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <MenuItem value={"deposit"}>Deposit</MenuItem>
              <MenuItem value={"withdrawal"}>Withdrawal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"paymentMethod"}
              value={formik.values.paymentMethod}
              onChange={formik.handleChange}
            >
              <MenuItem value={PAYMENT_METHODS_SLUGS_MAP.creditCard}>Credit Card</MenuItem>
              <MenuItem value={PAYMENT_METHODS_SLUGS_MAP.wireTransfer}>Wire Transfer</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {formik.values.type !== PAYMENT_METHODS_SLUGS_MAP.wireTransfer ? (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={"currencyName"}
                value={formik.values.currencyName}
                onChange={formik.handleChange}
              >
                {Object.values(CURRENCIES_SLUGS_MAP).map((currencySlug) => (
                  <MenuItem key={currencySlug} value={currencySlug}>
                    {currencySlug}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ) : null}

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
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

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
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

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="standard-basic"
              label="Exchange Transaction Id"
              variant="standard"
              name={"exchangeTransactionId"}
              value={formik.values.exchangeTransactionId}
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

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type={"submit"}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
