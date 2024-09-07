import { AuthSelectors } from '@/store/auth'
import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { useSelector } from 'react-redux'

const AuthLayout = () => {
  const user = useSelector(AuthSelectors.getUser)

  if (user.email) {
    return <Redirect href="/home" />
  }

  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout
