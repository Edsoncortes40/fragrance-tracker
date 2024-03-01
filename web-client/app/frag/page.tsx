'use client';

import styles from './page.module.css';
import {useSearchParams} from "next/navigation";
import {getFrag} from "../firebase/functions";
import { Review } from '../utils';

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

      <div className={styles.reviewsSection}>
        <div className={styles.reviewsContainer}>
          <h1>Reviews:</h1>

          {
            (!frag.Reviews || (frag.Reviews && frag.Reviews.length == 0)) ? (
              <p>No Reviews Yet!</p>
            ) : (
              frag.Reviews.map((review : Review) => (
                <div className={styles.review}>
                  <img className={styles.userImage} src={review.ImageUrl + ""} alt={"User Image Not Found"} />

                  <div className={styles.reviewText}> 
                    {review.UserName}
                    {review.Rating}
                    {review.Review}
                  </div>
                  
                </div>
              ))
            )
          }
        </div>
        
        <div className={styles.addReviewContainer}>
          <div className={styles.addReview}>
            <h1>Add Review:</h1>
            
              <form className={styles.form}>
                <input className={styles.textbox} type="number" name="Rating" 
                  id="Rating" placeholder="Enter Rating Here" required />
                <textarea className={styles.textbox} name="Review" 
                  id="Review" rows={7} placeholder="Enter Review Here" required></textarea>
                  
                  <button type='submit' className={styles.submitBtn}>Submit Fragrance</button>
              </form>

            </div>
        </div>
      </div>
      
      
    </div>
  );
}