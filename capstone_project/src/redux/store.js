import {configureStore} from '@reduxjs/toolkit'
import { capstone_api } from './api'

// redux store
export default configureStore({
    reducer: {
        [capstone_api.reducerPath]: capstone_api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(capstone_api.middleware)
})

