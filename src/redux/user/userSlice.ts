import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export interface UserAuthState {
    name: string | null;
    id: string | null;
}

const initialState: UserAuthState = {
    name: null,
    id: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<{ name: string, id: string, token: string }>) => {
            localStorage.setItem("user", JSON.stringify({
                name: action.payload.name,
                id: action.payload.id,
            }))
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        signOut: (state) => {
            localStorage.removeItem("user");
            state.name = "";
            state.id = "";
        }
    }
})

export const selectCustomerAuth = (state: RootState) => state.user;

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;