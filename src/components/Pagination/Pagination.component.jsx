/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ totalItems, perPage, handlePagination }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalItems / perPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <Fragment>
      <nav className='p-2' aria-label='Pagination'>
        <ul className='pagination justify-content-center mb-0 flex-wrap'>
          <li className='page-item disabled'>
            <Link className='page-link' to='#'>
              Previous
            </Link>
          </li>
          {pageNumbers.map((x) => (
            <li className='page-item active' key={x}>
              <a className='page-link' onClick={() => handlePagination(x)}>
                {x}
              </a>
            </li>
          ))}

          <li className='page-item'>
            <Link className='page-link' to='#'>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
