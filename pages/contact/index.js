import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout/layout";
import Link from "next/link";
import ContactForm from "../../components/molecules/ContactForm/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <ContactForm/>
      </section>
    </Layout>
  );
}
