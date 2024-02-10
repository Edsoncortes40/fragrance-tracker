import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={90} height={20}
                src="" alt="frag logo"/>
            </Link>
        </nav>
    )
}