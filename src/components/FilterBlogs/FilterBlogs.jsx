import { useState } from "react";
import styles from './FilterBlogs.module.css';

const FilterBlogs = (props) => {

    const [date,setDate]= useState('');


    return (
        <div  className={styles.filtercontainer}>
            <input type='date' value={date} onChange={(event)=>setDate(event.target.value)}/>

            <button className={styles.filterbutton} onClick={() => props.filterBlogsByDate(date)}>Filter</button>
        </div>
    )
}

export default FilterBlogs;