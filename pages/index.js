import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello and welcome to my beautiful mess of blog posts. I am Idil
          Ugurnal, a software engineer and an Economy and Management Science
          Master’s student, currently living in Berlin. This blog is the result
          of my journey of graduate school applications. I have spent a great
          deal of time trying to acquire information on what to do and how to
          apply to master’s programs during the summer before my senior year.
          After such struggle, I have decided to share my experience and
          knowledge with the ones who wish to continue graduate studies. I am a
          24 year old fresh graduate who is pursuing master’s degree at Humboldt
          University of Berlin. I am also currently working as a part time Data
          Analyst at Hypatos Berlin. Other than work and school, I have limited
          time but I spend it wisely. I am a yoga lover and I also enjoy
          pilates. I am passionate about sports and food. With this blog, I aim
          to help fellow students or friends that wish to go through graduate
          school applications. Also, I wish to share my life as an expat during
          Covid-19 outbreak, at Berlin. I hope to go through this step together
          and share my experience during this journey.
        </p>
        <p>
          You can start reading my <Link href = "/blog">blog</Link> or check out my <Link href = "/cv">CV</Link>.
        </p>
      </section>
    </Layout>
  );
}
