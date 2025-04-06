import styles from './PostItem.module.css'

const PostItem = (props) => {

    return (
        <div className={styles.card}>

            <img src={props.imageLink} alt="" />

            <div className={styles.title}>
                <h3>{props.title}</h3>

                <p>{props.date}</p>
            </div>
            

            <p>{props.description}</p>

            

            <button className={styles.removebutton} onClick={() => props.removeBlog(props.index)}>Remove blog</button>
        </div>
    )
}


export default PostItem;