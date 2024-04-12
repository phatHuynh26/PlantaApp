import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from '../screen/Detail';
import Search from '../screen/Search';
import Noti from '../screen/Noti';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
import Cart from '../screen/Cart';
import Category from '../screen/Category';
import Home from '../screen/Home'
import Pay from '../screen/Pay';
import Pay2 from '../screen/Pay2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const BotTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='TrangChu'
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../img/home.png')}
                            style={{ width: 30, height: 30, marginTop: 10 }} // Thay đổi kích thước theo ý muốn
                        />
                    ),
                    tabBarLabel: '',
                    headerShown: false
                }}
            />

            <Tab.Screen
                name='timkiem'
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../img/search.png')}
                            style={{ width: 30, height: 30, marginTop: 10 }} // Thay đổi kích thước theo ý muốn
                        />
                    ),
                    tabBarLabel: '',
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='thongbao'
                component={Noti}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../img/bell.png')}
                            style={{ width: 30, height: 30, marginTop: 10 }} // Thay đổi kích thước theo ý muốn
                        />
                    ),
                    tabBarLabel: '',
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../img/user.png')}
                            style={{ width: 35, height: 35, marginTop: 10 }} // Thay đổi kích thước theo ý muốn
                        />
                    ),
                    tabBarLabel: '',
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
} 
const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            
            <Stack.Screen name="bottom" component={BotTab} />
            <Stack.Screen name="chitiet" component={Detail} />
            <Stack.Screen name="chinhsua" component={EditProfile} />
            <Stack.Screen name="giohang" component={Cart} />
            <Stack.Screen name="danhmuc" component={Category} />
            <Stack.Screen name="thanhtoan" component={Pay}/>
            <Stack.Screen name="thanhtoan2" component={Pay2}/>


            
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})