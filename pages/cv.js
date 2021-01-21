import Head from "next/head";
import Layout from "../components/Layout/layout";
import React from 'react';
import SinglePagePDFViewer from "../components/PDFViewer/SinglePagePDF";

export default function Cv() {
  return (
    <Layout>
      <Head> CV </Head>
        <SinglePagePDFViewer pdf={'./CV/current-cv.pdf'} />
    </Layout>
  );
}
