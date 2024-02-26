import Link from "next/link";
import styles from "./footer.module.css";

export default function footer(){
    return (
        <div className={styles.footerContainer}>
            <Link href={"/"}>Home</Link>
            <p>Built and designed by Edson Cortes</p>
        </div>
    )
}