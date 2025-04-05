import styles from './PostItem.module.css'

const PostItem = (props) => {

    return (
        <div className={styles.card}>

            <img src={props.imageLink} alt="" />
            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <p>{props.date}</p>

            <button className={styles.removebutton} onClick={() => props.removeBlog(props.index)}>Remove blog</button>
        </div>
    )
}


export default PostItem;