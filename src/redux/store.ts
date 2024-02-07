import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "../services/api"
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({ user: userReducer, [api.reducerPath]: api.reducer, });

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector