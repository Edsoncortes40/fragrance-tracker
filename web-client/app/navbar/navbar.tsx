'use client';

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SignIn from './sign-in';

export default function Navbar(){
    
    return (
        <nav className={styles.nav}>
            <Link href="/">
                
                <Image className={styles.logo} width={70} height={70}
                src="/fragLogo.jpeg" alt="frag logo"/>
            </Link>
            <h1>Fragrance Tracker</h1>
            <SignIn />
        </nav>
    )
}