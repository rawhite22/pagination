import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  border: 0.5px solid black;
  color: dodgerblue;
  list-style: none;
  padding: 5px 10px;
  margin-bottom: 3px;
`;

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Li>{post.title}</Li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
