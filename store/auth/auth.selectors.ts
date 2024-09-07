import { RootState } from '../store'

const getUser = (state: RootState) => state.auth.data
const getError = (state: RootState) => state.auth.error
const getLoading = (state: RootState) => state.auth.loading

export const AuthSelectors = {
  getUser,
  getError,
  getLoading,
}
