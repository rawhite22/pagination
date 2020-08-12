import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const index0fFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(index0fFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='App'>
      <p>Blog Posts</p>
      <Posts loading={loading} posts={currentPosts} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
