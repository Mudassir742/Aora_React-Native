import { getLoginInfo, login } from '@/helpers/dbConfig'
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthInitialState, User } from '../auth.slice'

export const fetchAuthAsync = createAsyncThunk(
  'auth/fetchAuth',
  async (_, { rejectWithValue }) => {
    try {
      const loggedIn = await getLoginInfo()
      console.log("🚀 ~ loggedIn:", loggedIn)

      return { email: loggedIn.providerUid, username:'user' }
    } catch (error) {
      return rejectWithValue('error while logging in')
    }
  },
)

export const fetchAuthAsyncBuilder = (builder: ActionReducerMapBuilder<AuthInitialState>) => {
  builder.addCase(fetchAuthAsync.pending, (state, action) => {
    state.loading = true
    state.success = false
    state.error = ''
  })
  builder.addCase(fetchAuthAsync.fulfilled, (state, action: PayloadAction<User>) => {
    state.loading = false
    state.success = true
    state.data = action.payload
  })
  builder.addCase(fetchAuthAsync.rejected, (state, action: PayloadAction<any>) => {
    state.loading = false
    state.success = false
    state.error = action.payload
  })
}
