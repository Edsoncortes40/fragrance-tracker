import Link from "next/link";
import styles from "./page.module.css";

export default function Error(){
    return(
        <div className={styles.errContainer}>
        <h1>You Need Admin Rights to access this page!</h1>
        <Link href={"/"}>
            <button className={styles.homeBtn}>
                Home
            </button>
        </Link>
    </div>
    )
    
    
    
}