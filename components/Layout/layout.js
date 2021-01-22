import Head from "next/head";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Link from "next/link";
import NavBar from '../NavigationBar/NavigationBar'

const name = "Idil Ugurnal";
export const siteTitle = "Idil Ugurnal Blog";
const items = [
    { name: 'home', label: 'Home', link:'/' },
    { name: 'blog', label: 'Blog',
        items: [
            { name: 'graduateAdmissions', label: 'Graduate Admissions', link:'/blog/graduate_admissions' },
            { name: 'lifeInBerlin', label: 'Life in Berlin', link:'/blog/life_in_berlin'},
        ],
        link:'/blog'},
    { name: 'about', label: 'About', link:'/' },
    { name: 'contact', label: 'Contact', link:'/' },
]

export default function Layout({ children, home }) {
  return (
      <div>
          <div className = {styles.navBar}>
              <NavBar items={items} />
          </div>
        <div className={styles.container}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <header className={styles.header}>
            {home ? (
              <>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.jpg"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a className={styles.backText}>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
  );
}
