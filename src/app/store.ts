import { configureStore } from '@reduxjs/toolkit';
import searchReducer from 'features/searchGame/searchSlice/searchSlice'

const store = configureStore({
    reducer: {
        searchReducer
    }
})


export default store