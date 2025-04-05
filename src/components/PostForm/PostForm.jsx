import { useState } from 'react';
import styles from './PostForm.module.css'

const PostForm = (props) => {

  const [title,setTitle] = useState ('');
  const [description,setDescription] = useState ('');
  const [data,setData] = useState ('');
  const [imageLink,setImageLink] = useState ('');

  const addNewPost =()=>{
    const newPost={
      title,
      description,
      data,
      imageLink,
   
  };

  props.addNewPost(newPost);

  setTitle ('');
  setDescription('');
  setData ('');
  setImageLink ('');

}

  return (
    <>

    <img className={styles.backgroundimg} src="https://everwallpaper.com/cdn/shop/products/1_beccc207-403d-4c30-a28b-1f6e337ed5f4.jpg?v=1658385121" alt="" />

    <div className={styles.formconatiner}>
      

     <div className={styles.container}>
       <h1>Add The Last Grand Adventure</h1>


       <form>
        <div>

          <div className={styles.inputcontainer}>
             <label>Title</label>
             <input type='text' 
               value={title}
               onChange={(event) => setTitle(event.target.value)}
              />
          </div>
         
         <div className={styles.inputcontainer}>
           <label>Description</label>
           <textarea  type='text'
             value={description}
             onChange={(event) => setDescription(event.target.value)}
            />
         </div>

         <div className={styles.inputcontainer}>
           <label>Date</label>
           <input style={{width:202}} type='date'
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
         </div>
          
          <div className={styles.inputcontainer}>
           <label>Image link</label>
           <input type='text'
             value={imageLink}
             onChange={(event) => setImageLink(event.target.value)}
            />
          </div>

        </div>

        </form>
        <button onClick={addNewPost}>Add Post</button>
      </div>

      <div className={styles.imgcontainer}>
        <img src="/src/assets/travel.png" alt="" />
      </div>
    </div>
    
    

      
    </>
  )
}

export default PostForm;