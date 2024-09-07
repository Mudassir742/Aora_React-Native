import { router, Redirect } from 'expo-router'
import { ScrollView, Text, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import { CustomButton } from '@/components'
import { useSelector } from 'react-redux'
import { AuthSelectors } from '@/store/auth'

export default function Welcome() {
  const user = useSelector(AuthSelectors.getUser)

  if (user.email) {
    return <Redirect href="/(tabs)/home"/>
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full items-center  px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[380px]"
            resizeMode="contain"
          />

          <View className="relative mt-2">
            <Text className="text-white text-center font-bold text-3xl">
              Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -right-8 -bottom-1"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 font-pregular text-center text-sm mt-7">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with
            Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            containerStyles="w-full mt-7"
            onPress={() => router.push('/signIn')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
