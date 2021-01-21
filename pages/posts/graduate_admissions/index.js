import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout/layout";

export default function Blogs() {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Graduate Admissions</h1>
      <h3>
        <Link href="/posts/graduate_admissions/done-with-college">
          <a> Done With College? What's Next?</a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/preparing-applications">
          <a> Preparing Your Applications in 6 Steps </a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/application-agenda">
          <a> Application Agenda: Starting and Keeping Track </a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/funding-studies">
          <a> Funding Your Studies: Scholarships & Grants </a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/stay-motivated">
          <a> How to Stay Motivated During COVID-19 </a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/offers-and-rejections">
          <a> A List of Offers and Rejections</a>
        </Link>
      </h3>
      <h3>
        <Link href="/posts/graduate_admissions/whats-next">
          <a> What's Next? </a>
        </Link>
      </h3>
    </Layout>
  );
}
