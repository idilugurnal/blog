import Head from "next/head";
import Layout from "../../components/Layout/layout";
import React from "react";
import SinglePagePDFViewer from "../../components/PDFViewer/SinglePagePDF";

export default function Cv() {
  return (
    <Layout>
      <Head>
        {" "}
        <title> CV </title>
      </Head>
      <SinglePagePDFViewer pdf={"./CV/current_cv.pdf"} />
    </Layout>
  );
}
