import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/styles";
import { theme } from "../styles";
import { Component } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default class App extends Component<AppProps> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode?.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <MaterialUIThemeProvider theme={theme}>
          <SCThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <Component {...pageProps} />
          </SCThemeProvider>
        </MaterialUIThemeProvider>
      </>
    );
  }
}
