import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//adding reduc persist to save user session in local storage
const rootReducer = combineReducers({user: userReducer})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefualtMiddleware) => 
    getDefualtMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);