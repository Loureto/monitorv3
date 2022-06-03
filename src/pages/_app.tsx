import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@contexts/authContext";
import { DashboardProvider } from "@contexts/dashboardContext";
import theme from "@styles/theme";
import "../styles/fonts.scss";
import "../styles/table.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <DashboardProvider>
            <Component {...pageProps} />
          </DashboardProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
