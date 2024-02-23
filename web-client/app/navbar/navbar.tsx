'use client';

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SignIn from './sign-in';
import {onAuthStateChangedHelper} from '../firebase/firebase';
import {useEffect, useState} from 'react';
import { User } from 'firebase/auth';


export default function Navbar(){
    // Init user State
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        // cleanup Subscription on unmount
        return () => unsubscribe();
    });


    return (
        <nav className={styles.nav}>
            <Link href="/">
                
                <Image className={styles.logo} width={70} height={70}
                src="/fragLogo.jpeg" alt="frag logo"/>
            </Link>
            <h1>Fragrance Tracker</h1>
            <SignIn user={user}/>
        </nav>
    )
}