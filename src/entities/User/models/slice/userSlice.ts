import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSchema, UserType } from '../types/user';

const initialState: UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.authData = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReduser } = userSlice;
