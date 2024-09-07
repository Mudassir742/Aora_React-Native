import { createSlice } from '@reduxjs/toolkit'
import {
  fetchAuthAsync,
  fetchAuthAsyncBuilder,
  loginAsync,
  loginAsyncBuilder,
  registerAsync,
  registerAsyncBuilder,
} from './asynRequests'

export interface User {
  email: string
  username: string
}

export interface AuthInitialState {
  data: User
  error: string
  loading: boolean
  success: boolean
}

const initialState: AuthInitialState = {
  data: {} as User,
  error: '',
  loading: false,
  success: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginAsyncBuilder(builder)
    registerAsyncBuilder(builder)
    fetchAuthAsyncBuilder(builder)
  },
})

export const AuthActions = {
  ...AuthSlice.actions,
  loginAsync,
  registerAsync,
  fetchAuthAsync,
}

export const AuthReducer = AuthSlice.reducer
