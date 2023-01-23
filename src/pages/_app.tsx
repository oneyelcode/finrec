import "antd/dist/reset.css";
import "../styles/main.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import type { NextPageWithLayout } from "@types";
import { Inter } from "@next/font/google";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import { customTheme } from "@components";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ConfigProvider theme={customTheme} locale={enUS}>
      <main className={`${inter.variable} font-sans`}>{getLayout(<Component {...pageProps} />)}</main>
    </ConfigProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
