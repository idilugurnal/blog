import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout/layout";


export default function (){

    return(
        <Layout>
            <Head>
                <title>Blogs</title>
            </Head>
            <h3>
                <Link href="/blog/graduate_admissions">
                    <a>Graduate Admissions</a>
                </Link>
            </h3>
            <h3>
                <Link href="/blog/life_in_berlin">
                    <a>Life in Berlin</a>
                </Link>
            </h3>
        </Layout>
    );
}
