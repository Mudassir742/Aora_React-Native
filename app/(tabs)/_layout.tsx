import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'

interface TabBarIconProps {
  focused: boolean
  color: string
  size: number
  icon: any
  name: string
}

const TabsIcon: FC<TabBarIconProps> = ({ name, icon, focused, color, size }) => {
  return (
    <View className="justify-center items-center gap-2">
      <Image source={icon} className="w-6 h-6" tintColor={color} resizeMode="contain" />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: (props) => <TabsIcon name="Home" icon={icons.home} {...props} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            tabBarIcon: (props) => <TabsIcon name="Bookmark" icon={icons.bookmark} {...props} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: (props) => <TabsIcon name="Create" icon={icons.plus} {...props} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: (props) => <TabsIcon name="Profile" icon={icons.profile} {...props} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
