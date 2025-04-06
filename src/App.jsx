import { useState } from 'react';
import './App.css'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList';
import FilterBlogs from './components/FilterBlogs/FilterBlogs';

function App() {

  const [blogs, setBlogs]=useState([{
    title: 'Ticino, Switzerland',
    description: 'This is of the most farityle – like villages on earth. This is Foroglio in Ticino, Switzerland. Located in Val Bavona, it’s only inhabited during the summer due to its lack of electricity.Without it, the colder months would be quite challenging. The village is know for its stunning 110 meter waterfalland is a serene spot to visit in spring, offering a less crowded experience compared to summer. Just 50 minute drive away lies Lavertezzo in Verzasca Valley, know for the Ponte dei Salti double – arched bridge. This medieval bridge, dating back to the 17th century, was rebuilt in 1960 after the right arch was destroyed in a flood in 1868.',
    date: '09-04-2024',
    imageLink: 'https://www.newlyswissed.com/wp-content/uploads/2018/05/Foroglio-Ticino-Waterfalls-01a_feature.jpg',
  }]);
  
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
