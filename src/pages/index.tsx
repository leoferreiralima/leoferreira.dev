import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leonardo Ferreira Lima</title>
        <meta
          name="description"
          content="Leonardo Ferreira Lima personal site and blog"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Leonardo Ferreira Lima</p>
          <p>Personal Site and Blog</p>
          <a>Coming Soon</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
