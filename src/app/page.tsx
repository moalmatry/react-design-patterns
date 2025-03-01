import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/layout/split-screen">Split Screen</Link>
        <Link href="/layout/list">List</Link>
        <Link href="/controlled-un-controller">controlled & un controller</Link>
      </main>
    </div>
  );
}
