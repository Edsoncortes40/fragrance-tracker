"use client";

import styles from "./page.module.css";
import { getUserInfo } from "../firebase/functions";
import { useSearchParams } from "next/navigation";


export default async function AddFrag(){

    const uid = useSearchParams().get('u');
    if(uid == ""){
        window.location.assign("/");
    }
    const userInfo = await getUserInfo(uid as string);

    if(userInfo.admin == 0){
        window.location.assign("/error");
    }


    

    return (
        <div className={styles.addFrag}>
            <h1>Add a fragrance:</h1>
            <p>You must have admin Rights in order to add a fragrance!</p>
            <p>Coming Soon!</p>
           
            <form className={styles.form}>
                <input className={styles.textbox} type="text" name="FragName" placeholder="Enter Fragrance Name Here" required />
                <input className={styles.textbox} type="text" name="Brand" placeholder="Enter Brand Here" required />
                <input className={styles.textbox} type="text" name="Gender" placeholder="Enter Gender Here" required />
                <input className={styles.textbox} type="text" name="ImageUrl" placeholder="Enter Image Url Here" required />
                <textarea className={styles.textbox} name="" rows={7} placeholder="Enter Description" required></textarea>
                
                <button type='submit' className={styles.submitBtn}>Submit Fragrance</button>
            </form>

        </div>
    )
}