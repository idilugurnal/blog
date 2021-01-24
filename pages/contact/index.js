import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Contact info</p>
      </section>
    </Layout>
  );
}
