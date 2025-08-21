'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  depositHistory,
  getTansactions,
  getUsers,
} from '@/redux/features/profile/profile_service_syn';
import { formatAmount, formatDate } from '@/hooks/helpers';

const UserList = () => {
  const dispatch = useDispatch();
  const { transactions, users, usersLoader } = useSelector(
    (state) => state.profile,
  );
  console.log(users, 'users');

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className='container-fluid content-inner pb-0'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-header'>
              <h4 className='card-title text-white'>Users Info</h4>
            </div>
            <div className='d-flex mt-3 mx-4 justify-content-between gap-2 flex-wrap'>
              <div className='d-inline-block'>
                <select
                  className='form-select form-select-sm'
                  id='validationDefault04'
                  required
                >
                  <option selected disabled value>
                    10
                  </option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
              <div className='form-outline'>
                <input
                  type='search'
                  id='form1'
                  className='form-control ms-1'
                  placeholder='Search..'
                  aria-label='Search'
                />
              </div>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table'>
                  <thead className>
                    <tr>
                      <th>Name</th>
                      <th>Last updated</th>
                      <th>Email</th>
                      <th>Balance</th>
                      <th>Investment</th>
                      <th>Profit</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr>
                        <td>{user?.name}</td>
                        <td>
                          
                            {formatDate(user?.wallet?.updatedAt)}
                        </td>
                        <td>{user?.email}</td>
                        <td>{formatAmount(user?.wallet?.balance)}</td>
                        <td>{formatAmount(user?.wallet?.investmentBalance)}</td>
                        <td>{formatAmount(user?.wallet?.profits)}</td>
                        <td>
                          <a href={`/dashboard/users/${user?._id}`}>
                            View Details
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='d-flex justify-content-between flex-wrap'>
                  <div
                    className='dataTables_info'
                    id='example_info'
                    role='status'
                    aria-live='polite'
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                  <nav aria-label='Page navigation example'>
                    <ul className='pagination'>
                      <li className='page-item'>
                        <a className='page-link' href='#' aria-label='Previous'>
                          <span aria-hidden='true'>
                            <svg
                              width={15}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              {' '}
                              <path
                                d='M15.5 19L8.5 12L15.5 5'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />{' '}
                            </svg>{' '}
                          </span>
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          1
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          2
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          3
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#' aria-label='Next'>
                          <span aria-hidden='true'>
                            <svg
                              width={15}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              {' '}
                              <path
                                d='M8.5 5L15.5 12L8.5 19'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />{' '}
                            </svg>{' '}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
