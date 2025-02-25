import logger from 'redux-logger';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false  
  }).concat(middleWares)
})