import PostItem from "../PostItem/PostItem";
import styles from './PostList.module.css'

const PostList=(props)=>{

    return (
        <div className={styles.cardList}>
            
            {props.blogs.map((blog)=> (
                <PostItem title={blog.title} 
                description={blog.description} 
                data={blog.data} 
                imageLink={blog.imageLink}/>))}
        </div>
    )
}

export default PostList;