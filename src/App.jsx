import { useState } from 'react';
import './App.css'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList';
import FilterBlogs from './components/FilterBlogs/FilterBlogs';

function App() {

  const [blogs, setBlogs]=useState([]);
  
  const [filteredBlogs, setFilteredBlogs]=useState([]);

  const addNewPost =(newPost)=>{
    setBlogs ([...blogs,newPost])
  };

  const removeBlog =(removeIndex)=>{
    const updatedBlogs = blogs.filter((blog,index)=> index !== removeIndex)

    setBlogs (updatedBlogs);
  
  };

  const filterBlogsByDate =(selectedDate)=>{
    const filteredBlogs = blogs.filter((blog)=> blog.date === selectedDate);

    setFilteredBlogs (filteredBlogs);
  }

  return (
    <>
    <PostForm addNewPost={addNewPost}/>
    <FilterBlogs filterBlogsByDate={filterBlogsByDate}/>
    <PostList blogs={filteredBlogs.length > 0 ? filteredBlogs : blogs}
     removeBlog={removeBlog}/>
    </>
  )
}

export default App;
