import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigtion from './UserNavigtion';
import MainNavigation from './MainNavigation';
import { useDispatch,useSelector } from 'react-redux';
    
const AppNavigation = () => {
    const appState = useSelector(state =>state.app)
    console.log(appState);
    return (
        <NavigationContainer>
            {appState.user!==null? <MainNavigation/> : <UserNavigtion/>}
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})