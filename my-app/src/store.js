import { configureStore } from '@reduxjs/toolkit'

import memoSlice from './memo/memoSlice'

export default configureStore({
    reducer: {
        memo : memoSlice
    }
})