import styles from "/styles/Home.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";

let pageIndex = 1;

function CounterDown() {
  if (pageIndex >= 2) {
    pageIndex--;
    return pageIndex;
  } else {
    return (pageIndex = 2);
  }
}

function CounterUp() {
  if (pageIndex < 6) {
    pageIndex++;
    return pageIndex;
  } else {
    return 6;
  }
}

function Arrows() {
  if (pageIndex > 2 && pageIndex < 6) {
    return (
      <div>
        <div onClick={CounterUp}>
          <Link href={"/" + Number(pageIndex + 1)} passHref scroll={false}>
            <div id={styles.downarrow} className={styles.arrows}>
              <Icon icon="typcn:arrow-up" vFlip={true} />
            </div>
          </Link>
        </div>
        <div onClick={CounterDown}>
          <Link href={"/" + Number(pageIndex - 1)} passHref scroll={false}>
            <div id={styles.uparrow} className={styles.arrows}>
              <Icon icon="typcn:arrow-up" />
            </div>
          </Link>
        </div>
      </div>
    );
  } else if (pageIndex == 2) {
    return (
      <div>
        <div onClick={CounterUp}>
          <Link href={"/" + Number(pageIndex + 1)} passHref scroll={false}>
            <div id={styles.downarrow} className={styles.arrows}>
              <Icon icon="typcn:arrow-up" vFlip={true} />
            </div>
          </Link>
        </div>
        <div onClick={CounterDown}>
          <Link href={"/"} passHref scroll={false}>
            <div id={styles.uparrow} className={styles.arrows}>
              <Icon icon="typcn:arrow-up" />
            </div>
          </Link>
        </div>
      </div>
    );
  } else if (pageIndex == 6) {
    return (
      <div onClick={CounterDown}>
        <Link href={"/" + Number(pageIndex - 1)} passHref scroll={false}>
          <div id={styles.uparrow} className={styles.arrows}>
            <Icon icon="typcn:arrow-up" />
          </div>
        </Link>
      </div>
    );
  } else if (pageIndex == 1) {
    return (
      <div onClick={CounterUp}>
        <Link href={"/" + Number(pageIndex + 1)} passHref scroll={false}>
          <div id={styles.downarrow} className={styles.arrows}>
            <Icon icon="typcn:arrow-up" vFlip={true} />
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div onClick={CounterUp}>
        <Link href={"/" + Number(pageIndex - 1)} passHref scroll={false}>
          <div id={styles.downarrow} className={styles.arrows}>
            <Icon icon="typcn:arrow-up" vFlip={true} />
          </div>
        </Link>
      </div>
    );
  }
}

export default Arrows;
