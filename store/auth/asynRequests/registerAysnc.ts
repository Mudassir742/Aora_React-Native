import { register } from '@/helpers/dbConfig'
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthInitialState, User } from '../auth.slice'

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (
    { email, password, username }: { email: string; password: string; username: string },
    { rejectWithValue },
  ) => {
    try {
      const registeredUser = await register(email, password, username)

      return {
        email:registeredUser.email,
        username:registeredUser.name
      }

    } catch (error) {
      return rejectWithValue("error while registering")
    }
  },
)

export const registerAsyncBuilder = (builder: ActionReducerMapBuilder<AuthInitialState>) => {
  builder.addCase(registerAsync.pending, (state, action) => {
    state.loading = true
    state.success = false
    state.error = ''
  })
  builder.addCase(registerAsync.fulfilled, (state, action: PayloadAction<User>) => {
    state.loading = false
    state.success = true
    state.data = action.payload
  })
  builder.addCase(registerAsync.rejected, (state, action: PayloadAction<any>) => {
    state.loading = false
    state.success = false
    state.error = action.payload
  })
}
