import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Arrows from "../components/Arrows";
import { motion } from "framer-motion";

const TributePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Norman Borlaug | Tribute Page</title>
        <meta name="description" content="Tribute page for Norman Borlaug" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={styles.background}>
        <div className={styles.whiteFrame}>
          <div className={styles.navigationBar}>
            <h1>Tribute</h1>
            <nav>
              <a
                href="https://www.nobelprize.org/prizes/peace/1970/borlaug/biographical/"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
              <a
                href="https://borlaug.tamu.edu/home/dr-norman-borlaug/"
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </nav>
          </div>
          <main className={styles.mainContent}>
            <section className={styles.leftSection}>
              <motion.div
                className={styles.image}
                initial="imageInitial"
                animate="imageAnimate"
                variants={{
                  imageInitial: {
                    opacity: 0,
                  },
                  imageAnimate: {
                    opacity: 1,
                    transition: {
                      type: "linear",
                      duration: 1.8,
                    },
                  },
                }}
              >
                <Image
                  src={"/img/Norman-Borlaug-with-team.jpg"}
                  alt={"Dr. Norman Borlaug with his team"}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <p>
                Dr. Norman Borlaug, third from the left, trains biologists in
                Mexico on how to increase wheat yields - part of his life-long
                war on hunger.
              </p>
            </section>
            <section className={styles.rigthSection}>
              <h2>Dr. Norman Borlaug</h2>
              <p className={styles.paragraph}>
                The man who <br /> saved a billion lives
              </p>
              <p className={styles.year}>1914 - 2009</p>
            </section>
            <Arrows />
          </main>
        </div>
      </body>
    </div>
  );
};

export default TributePage;
