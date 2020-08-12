import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const leftClick = (number) => {
    if (number <= 1) {
      return null;
    } else {
      paginate(number - 1);
    }
  };
  const rightClick = (number) => {
    if (number === 10) {
      return null;
    } else {
      paginate(number + 1);
    }
  };

  return (
    <nav style={{ display: 'flex' }}>
      <a
        style={{ textDecoration: 'none', color: 'dodgerblue' }}
        href='!#'
        onClick={() => {
          leftClick(currentPage);
        }}>
        left
      </a>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {pageNumbers.map((number) => (
          <li
            style={{
              padding: '5px 5px',
              textDecoration: 'none',
            }}
            key={number}>
            {
              <a
                className={`${currentPage === number ? 'active' : ''}`}
                style={{
                  textDecoration: 'none',
                  color: currentPage === number ? 'red' : 'dodgerblue',
                }}
                onClick={() => {
                  paginate(number);
                }}
                href='!#'>
                {number}
              </a>
            }
          </li>
        ))}
      </ul>
      <a
        style={{ textDecoration: 'none', color: 'dodgerblue' }}
        onClick={() => {
          rightClick(currentPage);
        }}
        href='!#'>
        right
      </a>
    </nav>
  );
};

export default Pagination;
