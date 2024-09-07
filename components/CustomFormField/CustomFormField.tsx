import { View, Text, Image, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { icons, images } from '@/constants'

interface CustomFormFieldProps extends TextInputProps {
  label?: string
  containerStyles?: string
  labelStyles?: string
}

export const CustomFormField: FC<CustomFormFieldProps> = ({
  value,
  label,
  containerStyles,
  labelStyles,
  placeholder,
  placeholderTextColor,
  keyboardType,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <View className={`space-y-2 ${containerStyles}`}>
      {label && (
        <Text className={`text-gray-100 font-psemibold text-base ${labelStyles}`}>{label}</Text>
      )}
      <View className="border-black-200 border-2 h-16 bg-black-100 rounded-2xl px-4 items-center flex-row focus:border-secondary-100">
        <TextInput
          className="flex-1 text-white font-psemibold"
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={label === 'Password' && !showPassword}
        />

        {label === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={showPassword ? icons.eyeHide : icons.eye} className="w-6 h-6" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
