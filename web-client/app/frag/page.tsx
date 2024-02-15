'use client';

import {useSearchParams} from "next/navigation";

export default function Frag() {
  const fragId = useSearchParams().get('f');
  
  return (
    <div>
      <p>Fragrance: NULL</p>
    </div>
  );
  }