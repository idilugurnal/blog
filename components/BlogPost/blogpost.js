import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/layout";
import styles from "../Layout/layout.module.scss";

export default function BlogPost(props) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <h1>{props.title}</h1>
      <p>{props.post}</p>

        <div className={styles.backToHome}>
            <Link href = {`/posts/${props.blog}`}>
                <a> Back to Blog Posts </a>
            </Link>
        </div>

    </Layout>
  );
}
