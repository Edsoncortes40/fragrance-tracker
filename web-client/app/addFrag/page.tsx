'use client';
import styles from "./page.module.css";
import {createFragrance, getUserInfo} from "../firebase/functions";
import {userAuth} from "../context/AuthContext";
import { FormEvent, useRef } from "react";
import { useFormState } from "react-dom";

export default async function AddFrag(){

    // Get User context for Google Auth info
    const authContext = userAuth();

    if (!authContext){
        return (
            <div>
                <h1> error! </h1>
            </div>) 
    }

    const {user, signInWithGoogle, signOut} = authContext;

    // Send user back to home page if not signed in
    if(!user || user.uid == ""){
        window.location.assign("/");
     }


    // functions and variables for Form
    async function createFrag(prevState: {message: string}, formData: FormData){
        const resp = await createFragrance(formData.get("Brand") as string, 
                                           formData.get("Description") as string, 
                                           formData.get("Gender") as string, 
                                           formData.get("ImageUrl") as string, 
                                           formData.get("Name") as string);
        window.location.assign("/");
        return {message: "The fragrance has been created!"};
    }

    const initialState = {
        message: "",
      };

    const [state, formAction] = useFormState(createFrag, initialState);
    

    //check that user isn't null
    if (user){
        const userInfo = await getUserInfo(user.uid as string);

        if(userInfo.admin == 0){
            window.location.assign("/error");
        }

        return (
            <div className={styles.addFrag}>
                <h1>Add a fragrance:</h1>
                <p>You must have admin Rights in order to add a fragrance!</p>
                <p>Coming Soon!</p>
            
                <form className={styles.form} action={formAction}>
                    <input className={styles.textbox} type="text" name="Name" 
                        id="Name" placeholder="Enter Fragrance Name Here" required />
                    <input className={styles.textbox} type="text" name="Brand" 
                        id="Brand" placeholder="Enter Brand Here" required />
                    <input className={styles.textbox} type="text" name="Gender" 
                        id="Gender" placeholder="Enter Gender Here" required />
                    <input className={styles.textbox} type="text" name="ImageUrl" 
                        id="ImageUrl" placeholder="Enter Image Url Here" required />
                    <textarea className={styles.textbox} name="Description" 
                        id="Description" rows={7} placeholder="Enter Description" required></textarea>
                    
                    <button type='submit' className={styles.submitBtn}>Submit Fragrance</button>
                </form>

            </div>
        )
    }
}