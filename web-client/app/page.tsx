import Image from "next/image";
import styles from "./page.module.css";
import {getFrags} from "./firebase/functions";
import Link from "next/link";


export default async function Home() {
  const frags = await getFrags();


  return (
    <main className={styles.main}>

      <div className={styles.fragrances}>
        {
          frags.map((frag) => (
            <div className={styles.fragContainer}>
              <Link href={"/frag?f=" + frag.Name}>
                <div className={styles.frag}>
                    <img className={styles.fragImage} src={frag.ImageUrl + ""} alt={frag.Name} />
                  
                    <p className={styles.fragName}>{frag.Name}</p>
                  
                </div>
              </Link>
            </div>
          ))
        }  
      </div>
      
    </main>
  );
}
