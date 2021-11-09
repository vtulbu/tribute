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
        <div className={styles.whiteFramePages}>
          <main className={styles.mainContentPages}>
            <section className={styles.leftSectionPages}>
              <div className={styles.eventAndInfo}>
                <div className={styles.eventBox}>
                  {InfoPicker(5, "leftSectionEventBox")}
                </div>
                <p className={styles.informationBox}>
                  {InfoPicker(5, "leftSectionInformation")}
                </p>
              </div>
              <p className={styles.yearBox}>
                {InfoPicker(5, "leftSectionYear")}
              </p>
              <motion.div
                className={styles.imagePages}
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
                  src={InfoPicker(5, "leftSectionImage")}
                  alt={"Dr. Norman Bourlag explaining to his colleagues"}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
            </section>
            <section className={styles.rigthSectionPages}>
              <motion.div
                className={styles.imagePages}
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
                  src={InfoPicker(5, "rigthSectionImage")}
                  alt={"Dr.Norman Bourlag delivering speech"}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <p className={styles.yearBox}>
                {InfoPicker(5, "rigthSectionYear")}
              </p>
              <div className={styles.eventAndInfo}>
                <div className={styles.eventBox}>
                  {InfoPicker(5, "rigthSectionEventBox")}
                </div>
                <p className={styles.informationBox}>
                  {InfoPicker(5, "rigthSectionInformation")}
                </p>
              </div>
            </section>
            <Arrows />
          </main>
        </div>
      </body>
    </div>
  );
};
export default Pages;
