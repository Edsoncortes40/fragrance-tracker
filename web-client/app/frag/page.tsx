'use client';
import styles from './page.module.css';
import {useSearchParams} from "next/navigation";
import {createReview, getFrag} from "../firebase/functions";
import { Review } from '../utils';
import { useFormState } from 'react-dom';
import {useAuth} from "../context/AuthContext";

export default async function Frag() {
  
  // Hooks
  const fragName = useSearchParams().get('f');
  const authContext = useAuth();

  const reviewInitialState = {
    message: "",
  };
  const [reviewState, revAction] = useFormState(createRev, reviewInitialState);
  
  // Get fragrance from database
  const frag = await getFrag(fragName as string);


  // Get current user info from google auth
  if (!authContext){
    return (
        <div>
            <h1> error! </h1>
        </div>) 
}

const {user, signInWithGoogle, signOut} = authContext;

  // form function
async function createRev(prevState: {message: string}, formData: FormData){
  // TODO
  if(user){
    const userName = user.displayName;
    const userImage = user.photoURL;
    const rating = parseInt(formData.get("Rating") as string);

    const resp = await createReview(fragName as string, 
                                      userImage as string, 
                                      rating, 
                                      formData.get("Review") as string, 
                                      userName as string);

    if(typeof window !== "undefined"){
      window.location.assign("/");
    }
    return {message: "The fragrance has been created!"};
  }else{
    signInWithGoogle();
    return {message: "Sign in to create review"};
  }
    
}
  
  
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
                <div className={styles.review} key={review.UserName}>
                  <img className={styles.userImage} src={review.ImageUrl + ""} alt={"User Image Not Found"} />

                  <div className={styles.reviewText}> 
                    <h2 className={styles.username}>{review.UserName}</h2>
                    <p className={styles.rating}> Rating: {review.Rating}</p>
                    <p className={styles.reviewDesc}>{review.Review}</p>
                  </div>
                  
                </div>
              ))
            )
          }
        </div>
        
        <div className={styles.addReviewContainer}>
          <div className={styles.addReview}>
            <h1>Add Review:</h1>
            
              <form className={styles.form} action={revAction}>
                <input className={styles.textbox} type="number" name="Rating" 
                  id="Rating" placeholder="Enter Rating Here" required />
                <textarea className={styles.textbox} name="Review" 
                  id="Review" rows={8} placeholder="Enter Review Here" required></textarea>
                  
                  <button type='submit' className={styles.submitBtn}>Submit Fragrance</button>
              </form>

            </div>
        </div>
      </div>
      
      
    </div>
  );
}