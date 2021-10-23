import React from "react";
import { Button, FormControl, Grid, makeStyles, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";

export interface IRegisterDataByJsonFormProps {
  title: string;
  onSubmit: (jsonString: string) => Promise<any>;
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export const RegisterDataByJsonForm = ({ title, onSubmit }: IRegisterDataByJsonFormProps) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      json: "",
    },
    onSubmit: (data) => onSubmit(data.json),
    validate: (values) => (Boolean(JSON.parse(values.json)) ? {} : { json: "not valid json input" }),
  });
  console.log(formik);
  return (
    <div>
      <Typography variant={"h2"}>{title}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <TextField
              id="json-field"
              label="Json Response"
              variant="standard"
              name={"json"}
              value={formik.values.json}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type={"submit"} disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};
