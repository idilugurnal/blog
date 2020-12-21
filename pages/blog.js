import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout/layout";

export default function Blog() {
  return (
    <Layout>
      <Head> Blog Posts</Head>
      <h1> Post 1</h1>
      <h1> Post 2</h1>
    </Layout>
  );
}
