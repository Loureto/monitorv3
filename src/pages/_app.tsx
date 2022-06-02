import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { AuthProvider } from "@contexts/authContext";
import Head from "next/head";
import "../styles/fonts.css";
import { DashboardProvider } from "@contexts/dashboardContext";

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
