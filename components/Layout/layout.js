import Head from "next/head";
import React from "react";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Link from "next/link";
import NavigationBar from "../molecules/NavigationBar/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";

const name = "Idil Ugurnal";
export const siteTitle = "Idil Ugurnal Blog";

export default function Layout({ children, home }) {
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
      <Container fluid>
        <Row>
          <Col xs={2} md={2} xl={2} className={styles.navBar}>
            <NavigationBar />
          </Col>
          <Col xs={9} md={9} xl={9}className={styles.container}>
            <Head>
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="description"
                content="My personal blog"
              />
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
          </Col>
            <Col xs={1} md={1} xl={1}> </Col>
        </Row>
      </Container>
    </div>
  );
}
