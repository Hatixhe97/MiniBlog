import PostItem from "../PostItem/PostItem";
import styles from './PostList.module.css'

const PostList=(props)=>{

    return (
        <div className={styles.cardList}>
            
            {props.blogs.map((blog,index)=> (
                <PostItem title={blog.title} 
                description={blog.description} 
                date={blog.date} 
                imageLink={blog.imageLink}
                index={index}
                removeBlog={props.removeBlog}
                />))}
        </div>
    )
}

export default PostList;