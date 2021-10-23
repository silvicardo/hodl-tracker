import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CoinName, ExchangeCoinsApiResponse } from "../../types";
import { RenderEurPairedCurrencyData } from "../RenderEurPairedCurrencyData/RenderEurPairedCurrencyData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export interface IEurUserBalanceTableProps {
  currencyNames: Exclude<CoinName, "EUR">[];
  currencyPricesData: ExchangeCoinsApiResponse;
}

export const UserEurBalanceTable = ({ currencyNames, currencyPricesData }: IEurUserBalanceTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>COIN NAME</TableCell>
            <TableCell align="right">Eur value per unit</TableCell>
            <TableCell align="right">Net Purchased Coin Amount</TableCell>
            <TableCell align="right">Net Eur Spent</TableCell>
            <TableCell align="right">Average Coin Unit Purchase Eur Price</TableCell>
            <TableCell align="right">Potential Gain Percentage</TableCell>
            <TableCell align="right">Potential Gain Eur Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyNames.map((currencyName) => (
            <RenderEurPairedCurrencyData
              key={currencyName}
              currencyName={currencyName}
              currencyEurActualPrice={currencyPricesData[currencyName].price}
            >
              {({ data, aggregatedData }) => (
                <TableRow key={currencyName}>
                  <TableCell component="th" scope="row">
                    {currencyName}
                  </TableCell>
                  <TableCell align="right">{currencyPricesData[currencyName].price}</TableCell>
                  <TableCell align="right">
                    {aggregatedData.purchases.net} {currencyName}
                  </TableCell>
                  <TableCell align="right">{aggregatedData.purchases.spent.toFixed(2)} €</TableCell>
                  <TableCell align="right">{aggregatedData.purchases.averageLoadPrice.toFixed(2)} €</TableCell>
                  <TableCell align="right">{aggregatedData.potentialProfit.gainPercentage.toFixed(2)} %</TableCell>
                  <TableCell align="right">{aggregatedData.potentialProfit.initialCurrencyGain.toFixed(2)} €</TableCell>
                </TableRow>
              )}
            </RenderEurPairedCurrencyData>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
