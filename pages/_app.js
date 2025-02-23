import Layout from "@/components/layout/Layout";

import "@fontsource/vazir";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster position="top-left" />
    </Layout>
  );
}
