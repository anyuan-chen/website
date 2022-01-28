import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import ProjectsHeading from "../components/main/projectsHeading";
export default function Home() {
  return (
    <div className={styles.grid}>
      <nav className={styles.nav}>
        <Navbar></Navbar>
      </nav>
      <main className={styles.main}>
        <section className={styles.about}>
          <div className="flex">
            <h2 className={styles.aboutHeading}>About Me</h2>
            <img src="/icons/arrow_downward.svg"></img>
          </div>
          <h1 className={styles.aboutMain}>
            I’m a software engineer based in Toronto.{" "}
          </h1>
          <h5 className={styles.aboutBlurb}>
            I design and build refreshing web experiences, packed to the punch
            with delightful interactions.
          </h5>
        </section>
        <section className={styles.projects}>
          <h2 className="pt-24">Work</h2>
          <ProjectsHeading></ProjectsHeading>
        </section>
        <section className={styles.writing}>
          <div className="flex pt-24">
            <h2>Writing</h2>
            <img src="/icons/arrow_downward.svg"></img>
          </div>
        </section>
      </main>
    </div>
  );
}
