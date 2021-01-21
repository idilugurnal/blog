import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout/layout";

export default function Blogs() {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>
      <h3>
        <Link href="/posts/graduate_admissions">
          <a>Graduate Admissions</a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/master_in_germany">
          <a>Master in Germany</a>
        </Link>
      </h3>
    </Layout>
  );
}
