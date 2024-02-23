'use client';

import styles from './page.module.css';
import {useSearchParams} from "next/navigation";
import {getFrag} from "../firebase/functions";

export default async function Frag() {
  const fragName = useSearchParams().get('f');
  const frag = await getFrag(fragName as string);
  return (
    
    <div>

    <img className={styles.fragImage} src={frag.ImageUrl + ""} alt={frag.Name} />
      <h1>Fragrance: {fragName}</h1> 
      <p>Brand: {frag.Brand}</p>
      <p>Description: {frag.Description}</p>
      <p>Gender: {frag.Gender}</p>
      <p>Id: {frag.Id}</p>
    </div>
  );
}