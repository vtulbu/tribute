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
        <meta name="description" content="Tribute page for Norman Burlaug" />
      </Head>
      <body className={styles.background}>
        <div className={styles.whiteFramePages}>
          <main className={styles.mainContentPages}>
            <section className={styles.leftSectionPages}>
              <div className={styles.eventAndInfo}>
                <div className={styles.eventBox}>
                  {InfoPicker(4, "leftSectionEventBox")}
                </div>
                <p className={styles.informationBox}>
                  {InfoPicker(4, "leftSectionInformation")}
                </p>
              </div>
              <p className={styles.yearBox}>
                {InfoPicker(4, "leftSectionYear")}
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
                  src={InfoPicker(4, "leftSectionImage")}
                  alt={"Dr. Norman Bourlag and his wife"}
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
                  src={InfoPicker(4, "rigthSectionImage")}
                  alt={"Women involved in typing"}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <p className={styles.yearBox}>
                {InfoPicker(4, "rigthSectionYear")}
              </p>
              <div className={styles.eventAndInfo}>
                <div className={styles.eventBox}>
                  {InfoPicker(4, "rigthSectionEventBox")}
                </div>
                <p className={styles.informationBox}>
                  {InfoPicker(4, "rigthSectionInformation")}
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
