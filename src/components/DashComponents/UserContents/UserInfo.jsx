'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  depositHistory,
  getTansactions,
  getUsers,
  getSingleUserProfile,
  UpdateUserWallet,
  UpdateUserInvestmentBalance,
} from '@/redux/features/profile/profile_service_syn';
import { formatAmount, formatDate } from '@/hooks/helpers';

const UserInfo = ({ id }) => {
  const [userWallet, setUserWallet] = useState({});
  const [dailyProfit, setDailyProfit] = useState(0);
  const dispatch = useDispatch();
  const {
    singleUser,
    updatingUserWallet,
    userWalletUpdateSuccess,
    userWalletUpdateError,
    userWalletMessage,
    updatingUserInvestment,
    userInvestUpdateSuccess,
    userInvestUpdateError,
    userInvestMessage,
  } = useSelector((state) => state.profile);
  console.log(singleUser, 'single user');

  useEffect(() => {
    dispatch(getSingleUserProfile(id));
  }, [id]);

  useEffect(() => {
    setUserWallet(singleUser?.wallet);
  }, [singleUser]);

  const hanleUserWalletChange = (e) => {
    const { name, value } = e.target;
    setUserWallet({ ...userWallet, [name]: Number(value) });

    console.log(userWallet, 'from user wallet');
  };

  const updateWallet = () => {
    const walletDetails = { user_id: id, ...userWallet };
    // console.log(walletDetails, 'wallet details');
    dispatch(UpdateUserWallet(walletDetails));
  };

  const updateUserInvestment = () => {
    const walletDetails = { user_id: id, amount: Number(dailyProfit) };
    console.log(walletDetails, 'invest balance');
    dispatch(UpdateUserInvestmentBalance(walletDetails));
  };

  useEffect(() => {
    if (userWalletUpdateSuccess) {
      dispatch(getSingleUserProfile(id));
    }
    if (userInvestUpdateSuccess) {
      dispatch(getSingleUserProfile(id));
    }
  }, [userWalletUpdateSuccess, userInvestUpdateSuccess]);
  return (
    <div className='container-fluid content-inner pb-0'>
      <div>
        <div className='row'>
          <div className='col-xl-9 col-lg-8'>
            <div className='card'>
              <div className='card-header d-flex justify-content-between'>
                <div className='header-title'>
                  <h4 className='card-title'>User Information</h4>
                </div>
              </div>
              <div className='card-body'>
                <div className='new-user-info'>
                  <>
                    <div className='row'>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='fname'>
                          User Name:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='fname'
                          value={singleUser?.name}
                          placeholder='User Name'
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='lname'>
                          User Email:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='lname'
                          placeholder='User email'
                          value={singleUser?.email}
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='add1'>
                          User Phone:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='add1'
                          placeholder='user phone'
                          value={singleUser?.phone}
                        />
                      </div>
                    </div>
                    <hr />
                    <h5 className='mb-3'>Wallet Info</h5>
                    <div className='row'>
                      <div className='form-group col-md-12'>
                        <label className='form-label' htmlFor='uname'>
                          User Balance:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='uname'
                          placeholder='User Balance'
                          value={userWallet?.balance}
                          name='balance'
                          onChange={hanleUserWalletChange}
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='pass'>
                          User Profits
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='pass'
                          placeholder='Profit'
                          value={userWallet?.profits}
                          name='profits'
                          onChange={hanleUserWalletChange}
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='pass'>
                          User Pending Balance
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='pass'
                          placeholder='Pending Balance'
                          value={userWallet?.pendingBalance}
                          name='pendingBalance'
                          onChange={hanleUserWalletChange}
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label className='form-label' htmlFor='pass'>
                          User Investment Balance
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='pass'
                          placeholder='Profit'
                          value={userWallet?.investmentBalance}
                          name='investmentBalance'
                          onChange={hanleUserWalletChange}
                        />
                      </div>
                    </div>

                    <div className='mt-3'>
                      <button
                        onClick={updateWallet}
                        type='submit'
                        className='btn btn-primary'
                      >
                        {updatingUserWallet
                          ? 'updating...'
                          : 'Update User Wallet'}
                      </button>
                    </div>
                    <div className='mt-3'>
                      <h5 className='mb-3'>Add profit</h5>
                      <div>
                        <div className='form-group col-md-6'>
                          <label className='form-label' htmlFor='pass'>
                            User Profit
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='pass'
                            placeholder='Daily Profit'
                            value={dailyProfit}
                            name='profits'
                            onChange={(e) => setDailyProfit(e.target.value)}
                          />
                          <button
                            onClick={updateUserInvestment}
                            type='submit'
                            className='btn btn-primary mt-3'
                          >
                            {updatingUserInvestment
                              ? 'updating wallet'
                              : 'Add Profit'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
