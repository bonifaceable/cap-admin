import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './features/profile/profile-slice';
import { authSlice } from './features/auth/auth_slices';
import { categorySlice } from './features/category/category_slices';
import { subCategorySlice } from './features/subCategory/sub_category_slices';
import { productSlice, transactionSlice } from './features/transactions/transaction_slices';

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    auth: authSlice.reducer,
    category: categorySlice.reducer,
    sub_category: subCategorySlice.reducer,
    transaction: transactionSlice.reducer,
  },
});
