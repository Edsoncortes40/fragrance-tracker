import Image from "next/image";
import styles from "./page.module.css";
import {getVideos} from "./firebase/functions";


export default async function Home() {
  const video = await getVideos();
  return (
    <main className={styles.main}>
    </main>
  );
}
