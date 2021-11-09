import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InfoPicker from "../components/info";
import Arrows from "../components/Arrows";
import { motion } from "framer-motion";

const Pages: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Norman Borlaug | Tribute Page</title>
        <meta name="description" content="Tribute page for Norman Borlaug" />
      </Head>
      <body className={styles.background}>
        <div className={styles.whiteFrameFinal}>
          <main className={styles.mainContentFinal}>
            <section className={styles.centerSectionPages}>
              <div className={styles.eventBox}>
                {InfoPicker(6, "centerEventBox")}
              </div>
              <p className={styles.centerInformationBox}>
                {InfoPicker(6, "centerInformation")}
              </p>
              <p className={styles.yearBoxFinal}>
                {InfoPicker(6, "centerYear")}
              </p>
              <motion.div
                className={styles.imagePagesFinal}
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
                  src={InfoPicker(6, "centerImage")}
                  alt={"Dr. Norman Bourlag portraite"}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className={`${styles.eventBox} ${styles.eventBoxFinal}`}>
                <a
                  href="https://ro.wikipedia.org/wiki/Norman_Borlaug"
                  target="_blank"
                  rel="noreferrer"
                >
                  {InfoPicker(6, "centerLink")}
                </a>
              </div>
            </section>
            <Arrows />
          </main>
          <footer className={styles.footer}>
            <p>
              <span>&copy;</span>2019 omiron.software All Rights Reserved
            </p>
          </footer>
        </div>
      </body>
    </div>
  );
};
export default Pages;
