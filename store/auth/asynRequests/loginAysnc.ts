import { login } from '@/helpers/dbConfig'
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthInitialState, User } from '../auth.slice'

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const loggedIn = await login(email, password)

      return { email: loggedIn.providerUid, username: 'username' }
    } catch (error) {
      return rejectWithValue('error while logging in')
    }
  },
)

export const loginAsyncBuilder = (builder: ActionReducerMapBuilder<AuthInitialState>) => {
  builder.addCase(loginAsync.pending, (state, action) => {
    state.loading = true
    state.success = false
    state.error = ''
  })
  builder.addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
    state.loading = false
    state.success = true
    state.data = action.payload
  })
  builder.addCase(loginAsync.rejected, (state, action: PayloadAction<any>) => {
    state.loading = false
    state.success = false
    state.error = action.payload
  })
}
