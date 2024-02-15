import Image from "next/image";
import styles from "./page.module.css";
import {getFrags} from "./firebase/functions";
import Link from "next/link";


export default async function Home() {
  const frags = await getFrags();


  return (
    <main className={styles.main}>
      {
        frags.map((frag) => (
          <Link href={"/frag?f=" + frag.Id}>
            <Image src={frag.ImageUrl + ""} alt={frag.Name} width={100} height={100}
            className={styles.cover}/>
          </Link>
        ))
      }
      
    </main>
  );
}
