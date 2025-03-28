import styles from './PostForm.module.css'

const PostForm = () => {

  return (
    <>
    <div className={styles.container}>
      <h1>Add New Post</h1>

      <form>
        <div>

          <div className={styles.inputcontainer}>
             <label>Title</label>
             <input type='text'/>
          </div>
         
         <div className={styles.inputcontainer}>
           <label>Description</label>
           <textarea />
         </div>

         <div className={styles.inputcontainer}>
           <label>Date</label>
           <input style={{width:202}} type='date'/>
         </div>
          
          <div className={styles.inputcontainer}>
           <label>Image link</label>
           <input type='text'/>
          </div>

        </div>

      </form>
      <button type='submit'>Add Post</button>
    </div>

      
    </>
  )
}

export default PostForm;