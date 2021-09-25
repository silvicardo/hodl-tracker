import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function createAndFillArrayByObjectValuesAtKeys<T extends { [key: string]: any }>(object: T, keysArray: string[]) {
  return keysArray.length > 0
    ? keysArray.reduce((acc, objectKey) => {
        acc.push(object[objectKey]);
        return acc;
      }, [] as Array<T[keyof T]>)
    : [];
}

export function GenericTable<K extends { [key: string]: any }>({
  data,
  displayedKeysNames,
}: {
  data: K[];
  displayedKeysNames: K[keyof K][];
}) {
  const classes = useStyles();

  const tRows = useMemo(
    () =>
      data.length > 0 ? data.map((rowData) => createAndFillArrayByObjectValuesAtKeys(rowData, displayedKeysNames)) : [],
    [data, displayedKeysNames]
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {displayedKeysNames.map((headName: string) => (
              <TableCell key={headName} align="center">
                {headName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tRows.map((row) => (
            <TableRow key={row[0]}>
              {row.map((rowDataArr: K[keyof K]) => (
                <TableCell align="center" key={rowDataArr}>
                  {rowDataArr}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
