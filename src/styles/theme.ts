import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "*": {
                    padding: 0,
                    margin: 0,
                    //boxSizing: "border-box",
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 468,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
    },
});