'use client';

import {Fragment} from 'react';
import styles from './sign-in.module.css';
import Link from 'next/link';
import {UserAuth} from "../context/AuthContext";

export default function SignIn() {
    const authContext = UserAuth();

    if (!authContext){
        return (
            <Fragment>
                Error!
            </Fragment>
        )
    }

    const {user, signInWithGoogle, signOut} = authContext;
    async function handleSignIn(){
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSignOut(){
        try {
          await signOut();
        } catch (error) {
          console.log(error);
        }
      };


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
                    <button className={styles.SignIn} onClick={handleSignIn}>
                        Sign In
                    </button>
                )
            }  
        </Fragment>
    )
}