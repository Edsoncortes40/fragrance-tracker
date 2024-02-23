'use client';

import {Fragment} from 'react';
import styles from './sign-in.module.css';
import {signInWithGoogle, signOut} from '../firebase/firebase';
import { User } from 'firebase/auth';
import Link from 'next/link';

interface SignInProps {
    user: User | null;
}

export default function SignIn({user}: SignInProps) {
    return (
        <Fragment>
            {   user ?
                (
                    <div className={styles.multiBtn}>
                        <Link href={"/addFrag?u=" + user.uid}>
                            <button className={styles.addFrag}>
                                Add Fragrance
                            </button>
                        </Link>
                        {
                        //<button className={styles.SignIn} onClick={signOut}>
                        //Sign Out
                        //</button>
                        }
                    </div>
                    

                    
                ) : (
                    <button className={styles.SignIn} onClick={signInWithGoogle}>
                        Sign In
                    </button>
                )
            }  
        </Fragment>
    )
}