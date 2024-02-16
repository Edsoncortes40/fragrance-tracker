'use client';

import {useSearchParams} from "next/navigation";
import {getFrag} from "../firebase/functions";

export default async function Frag() {
  const fragName = useSearchParams().get('f');
  const frag = await getFrag(fragName as string);
  return (
    
    <div>

      <h1>Fragrance: {fragName}</h1> 
      <p>Description: {frag.Brand}</p>
      <p>Gender: {frag.Gender}</p>
      <p>Id: {frag.Id}</p>
    </div>
  );
}