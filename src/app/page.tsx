import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="split-screen">Split Screen</Link>
      </main>
    </div>
  );
}
