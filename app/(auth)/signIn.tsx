import { View, Image, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import { CustomButton, CustomFormField } from '@/components'
import { Link } from 'expo-router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { AuthActions } from '@/store/auth'

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleInputChanges = (name: string, text: string) => {
    setUser({ ...user, [name]: text })
  }

  const handleSignIn = async () => {
    setLoading(true)
    try {
      if (!user.email || !user.password) {
        Alert.alert('inavlid inputs!')
        return
      }

      dispatch(AuthActions.loginAsync({ email: user.email, password: user.password }))
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="h-full w-full my-6 px-4 justify-center">
          <Image source={images.logo} className="w-[115px] h-[35px] mb-10" resizeMode="contain" />
          <Text className="text-white text-xl font-psemibold">SignIn</Text>

          <View className="my-8">
            <CustomFormField
              label="Email"
              containerStyles="mb-6"
              keyboardType="email-address"
              onChangeText={(text) => handleInputChanges('email', text)}
            />
            <CustomFormField
              label="Password"
              containerStyles="mb-6"
              onChangeText={(text) => handleInputChanges('password', text)}
            />

            <Text className="text-white text-right mb-6 text-sm">Forgot password?</Text>

            <CustomButton title="Log In" disabled={loading} onPress={handleSignIn} />

            <View className="justify-center flex-row gap-1 mt-6">
              <Text className="text-gray-100 font-psemibold">Don't have an account?</Text>
              <Link href="/signUp" className="text-secondary font-psemibold">
                SignUp
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
