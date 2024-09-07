import { AppDispatch } from '@/store'
import { AuthActions } from '@/store/auth'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Screens() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(AuthActions.fetchAuthAsync())
  },[])

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
