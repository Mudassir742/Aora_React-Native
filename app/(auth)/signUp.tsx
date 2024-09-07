import { View, Image, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import { CustomButton, CustomFormField } from '@/components'
import { Link } from 'expo-router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { AuthActions } from '@/store/auth'

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleInputChanges = (name: string, text: string) => {
    setUser({ ...user, [name]: text })
  }

  const handleSignUp = async () => {
    setLoading(true)
    try {
      if (!user.email || !user.password || !user.username) {
        Alert.alert('inavlid inputs!')
        return
      }

      dispatch(
        AuthActions.registerAsync({
          email: user.email,
          password: user.password,
          username: user.username,
        }),
      )
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="min-h-[83vh] w-full my-6 px-4 justify-center">
          <Image source={images.logo} className="w-[115px] h-[35px] mb-10" resizeMode="contain" />
          <Text className="text-white text-xl font-psemibold">SignUp</Text>

          <View className="my-8">
            <CustomFormField
              label="Username"
              containerStyles="mb-6"
              onChangeText={(text) => handleInputChanges('username', text)}
            />
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

            <CustomButton title="Register" onPress={handleSignUp} disabled={loading} />

            <View className="justify-center flex-row gap-1 mt-6">
              <Text className="text-gray-100 font-psemibold">Already have account?</Text>
              <Link href="/signIn" className="text-secondary font-psemibold">
                SignIn
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
