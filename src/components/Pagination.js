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
        href='!#'
        onClick={() => {
          leftClick(currentPage);
        }}>
        left
      </a>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {pageNumbers.map((number) => (
          <li style={{ padding: '5px 5px' }} key={number}>
            {
              <a
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
