import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screen/SignIn'
import SignUp from '../screen/SignUp'
SignUp
const UserNavigtion = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="dangnhap" component={SignIn} />
            <Stack.Screen name="dangky" component={SignUp} />
        </Stack.Navigator>
    )
}

export default UserNavigtion

const styles = StyleSheet.create({})