import styles from "./page.module.css";

export default function AddFrag(){
    return (
        <div className={styles.addFrag}>
            <h1>Add a fragrance:</h1>
            <p>You must have admin Rights in order to add a fragrance!</p>
            <p>Coming Soon!</p>
           


            <form className={styles.form}>
                <input className={styles.textbox} type="text" name='name' placeholder='Enter Name Here' required />
                <input className={styles.textbox} type="email" name='email' placeholder='Enter Description Here' required />
                <textarea className={styles.textbox} name='message' rows='7' placeholder='Enter Brand Name Here' required></textarea>
                <button type='submit' className={styles.submitBtn}>Submit Fragrance</button>
            </form>

        </div>
    )
}