import Head from "next/head";
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../molecules/BurgerMenu/hooks";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import { theme } from "../molecules/BurgerMenu/theme";
import Burger from "../atoms/Burger/index";
import Menu from "../atoms/Menu/index";
import Footer from "../molecules/Footer/Footer";

const name = "Idil Ugurnal";
export const siteTitle = "Idil Ugurnal Blog";


export default function Layout({ children, home }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
      />
      <ThemeProvider theme={theme}>
        <>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </>
      </ThemeProvider>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="My personal blog" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title> Blog </title>
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
      </div>
        <Footer/>
    </div>
  );
}
