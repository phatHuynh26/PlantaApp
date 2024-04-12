import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppInput from '../../common/AppInput'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Button from '../../common/Button'
import LinearGradient from 'react-native-linear-gradient';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { login } from '../reduce/UserAPI';

const SignIn = () => {

  const appstate = useSelector(state => state.app)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()
  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('http://10.0.2.2:2610/users/login', {
    //     email,
    //     password,
    //   });
    //   if (response.data.status == true) {
    //     console.log('đăng nhập thành công');
    //   } else {
    //     alert(response.data.message);
    //   }
    // } catch (error) {
    //   alert("Sai Email hoặc mật khẩu")
    //   console.log(error);
    // }
    const body = { email, password }
    // console.log(body);
    dispatch(login(body))
  };


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const getContainerStyle = () => {
    return {
      borderColor: 'black',
      margin: 5,
      bottom: 80,
      width: 350,
      alignSelf: "center"
    }
  }
  const getButtonStyle = () => {
    return {
    }
  }
  const getButtonTextStyle = () => {
    return {
      color: 'white',
      fontSize: 20,
      alignSelf: "center",
      marginTop: 10,
      fontFamily: "Poppins-Bold"
    }
  }
  const getInputStyle = () => {
    return {
      borderWidth: 1,
      borderColor: '#8B8B8B',
      padding: 10,
      margin: 5,
      borderRadius: 10
    }
  }
  return (
    <View style={{}}>
      <Image
        style={styles.background}
        source={require('../img/background.png')}
      ></Image>
      <Text
        style={{ fontFamily: "Poppins-Bold", color: "black", fontSize: 30, alignSelf: "center", bottom: 70 }}
      >Chào mừng bạn</Text>
      <Text
        style={{ fontFamily: "Poppins-Regular", color: "black", fontSize: 18, alignSelf: "center", bottom: 80 }}
      >Đăng Nhập Tài Khoản</Text>
      <AppInput
        placeholder={'Nhập Email hoặc Số điện thoại'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle(),

        }}
        value={email}
        onChangeText={setEmail}
      />
      <AppInput
        placeholder={'Mật khẩu'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle()
        }}
        value={password}
        onChangeText={setPassword}
        icon={require('../img/eye.png')}
      />
      <View style={{ flexDirection: "row", bottom: 80, }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginLeft: 40, }}
            onPress={toggleCheckbox}>
            <Text>{isChecked ? 'V' : 'O'}</Text>
          </TouchableOpacity
          >
          <Text
            style={{ fontSize: 11, fontFamily: "Poppins-Medium", color: "#949090" }}
          > Nhớ mật khẩu</Text>
        </View>
        <TouchableOpacity
          style={{ marginLeft: 130, }}
        >
          <Text
            style={{ fontSize: 11, fontFamily: "Poppins-Medium", color: "red" }}
          >Forgot Password</Text></TouchableOpacity>
      </View>
      <LinearGradient
        style={{
          height: 50, width: 300,
          borderRadius: 15,
          alignSelf: "center", bottom: 50,
        }}
        colors={['#007537', '#4CAF50']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Button
          onPress={handleLogin}
          styles={{ button: getButtonStyle(), }}
          textbtl={"Đăng nhập"}
          styleText={{ textbtl: getButtonTextStyle() }}
        >
        </Button>
      </LinearGradient>

      <View style={{ flexDirection: "row", alignSelf: "center", bottom: 30 }}>
        <Image source={require('../img/line.png')}
          style={{ width: 120, height: 2 }}></Image>
        <Text
          style={{ fontFamily: "Poppins-Medium", color: "black", marginTop: -10 }}
        >  Hoặc  </Text>
        <Image source={require('../img/line.png')}
          style={{ width: 120, height: 2 }}></Image>
      </View>

      <View style={{ flexDirection: "row", alignSelf: 'center', bottom: 20 }}>
        <Image source={require('../img/logoGG.png')}
          style={{ height: 32, width: 32 }}></Image>
        <Image source={require('../img/logoFb.png')}
          style={{ height: 32, width: 32, marginLeft: 30 }}></Image>
      </View>


      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text
          style={{ fontFamily: "Poppins-Regular", color: "black" }}
        >Bạn không có tài khoản? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("dangky")}}>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: "#009245" }}
          > Tạo tài khoản? </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  background: {
    height: 350, width: 400, bottom: 80
  }
})