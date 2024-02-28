'use client';

import styles from './page.module.css';
import {useSearchParams} from "next/navigation";
import {getFrag} from "../firebase/functions";

export default async function Frag() {
    const fragName = useSearchParams().get('f');
  
  const frag = await getFrag(fragName as string);
  
  return (
    
    <div className={styles.fragContainer}>
      <div className={styles.fragInfo}>
        <img className={styles.fragImage} src={frag.ImageUrl + ""} alt={frag.Name} />
        <h1>{fragName}</h1> 
        <p>Brand: {frag.Brand}</p>
        <p>Gender: {frag.Gender}</p>
        <p>Description: {frag.Description}</p>
      </div>

      <div className={styles.fragReviews}>
        <h2>Reviews:</h2>
        <p>Comming soon!</p>
      </div>
      
    </div>
  );
}