import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pastriesApi } from './pastriesApi/index'
import { authApi } from './authApi/auth'

export const store = configureStore({
    reducer : {
    [pastriesApi.reducerPath] : pastriesApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pastriesApi.middleware, authApi.middleware),
});


setupListeners(store);
