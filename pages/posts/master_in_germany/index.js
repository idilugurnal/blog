import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout/layout";

export default function Blogs() {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Master in Germany</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
