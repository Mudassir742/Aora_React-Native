import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { FC } from 'react'

interface CustomButtonProps extends TouchableOpacityProps {
  title: string
  disabled?: boolean
  containerStyles?: string
  textStyles?: string
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  disabled,
  containerStyles,
  textStyles,
  ...rest
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        disabled ? 'opacity-50' : ''
      }`}
      disabled={disabled}
      {...rest}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}
