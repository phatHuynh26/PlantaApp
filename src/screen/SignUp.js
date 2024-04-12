import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../../common/AppInput'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Button from '../../common/Button';
Button
AppInput
const SignUp = () => {
  const navigation  = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister= async () => {
    try {
      const response = await axios.post('http://10.0.2.2:2610/users/register', {
        name,
        email,
        password,
        phonenumber,
      });
      if (response.data.status==true) {
        navigation.navigate('dangnhap')
      }else{
        alert('Đăng ký người dùng không thành công')
      }
      console.log(response)
    } catch (error) {
      // Xử lý lỗi kết nối API
      console.log(error);
    }
  };
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
  const getContainerStyle = () => {
    return {
      borderColor: 'black',

      bottom: 180,
      width: 350,
      alignSelf: "center"
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
    <View>
      <Image
        style={styles.background}
        source={require('../img/background.png')}
      ></Image>
      <Text
        style={{ fontFamily: "Poppins-Bold", color: "black", fontSize: 30, alignSelf: "center", bottom: 170 }}
      >Đăng ký</Text>
      <Text
        style={{ fontFamily: "Poppins-Regular", color: "black", fontSize: 18, alignSelf: "center", bottom: 180 }}
      >Tạo Tài Khoản</Text>

      <AppInput
        placeholder={'Họ Tên'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle(),

        }}
        value={name}
        onChangeText={setName}
      />

      <AppInput
        placeholder={'Nhập Email'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle(),

        }}
        value={email}
        onChangeText={setEmail}
      />
       <AppInput
        placeholder={'Nhập Mật Khẩu'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle(),

        }}
        value={password}
        onChangeText={setPassword}
      />
      <AppInput
        placeholder={'Nhập Số điện thoại'}
        styles={{
          container: getContainerStyle(),
          input: getInputStyle(),

        }}
        value={phonenumber}
        onChangeText={setPhoneNumber}
      />

     
      <View style={{alignSelf:"center",bottom:175}}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{ fontFamily: "Poppins-Light", color: 'black', fontSize: 12 }}
          >Để đăng ký tài khoản, bạn đồng ý</Text>
          <Text
            style={{ fontFamily: "Poppins-Light", color: '#009245', fontSize: 12,textDecorationLine:"underline",textDecorationColor:"black" }}
          > Terms & Conditions</Text>
        </View>

        <View style={{ flexDirection: 'row',alignSelf:'center' }}>
          <Text
            style={{ fontFamily: "Poppins-Light", color: 'black', fontSize: 12 }}
          > and</Text>
          <Text
            style={{ fontFamily: "Poppins-Light", color: '#009245', fontSize: 12,textDecorationLine:"underline",textDecorationColor:"black" }} 
          > Privacy Policy</Text>
        </View>
      </View>
      <LinearGradient
        style={{height: 50, width: 300,
        borderRadius: 15,
        alignSelf: "center", bottom: 170,}}
        colors={['#007537', '#4CAF50']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Button
          onPress={handleRegister}
          styles={{ button: getButtonStyle(), }}
          textbtl={"Đăng ký"}
          styleText={{ textbtl: getButtonTextStyle() }}
        >
        </Button>
      </LinearGradient>
      <View style={{ flexDirection: "row", alignSelf: "center", bottom: 150 }}>
        <Image source={require('../img/line.png')}
          style={{ width: 120, height: 2 }}></Image>
        <Text
          style={{ fontFamily: "Poppins-Medium", color: "black", marginTop: -10 }}
        >  Hoặc  </Text>
        <Image source={require('../img/line.png')}
          style={{ width: 120, height: 2 }}></Image>
      </View>

      <View style={{ flexDirection: "row", alignSelf: 'center', bottom: 150 }}>
        <Image source={require('../img/logoGG.png')}
          style={{ height: 32, width: 32 }}></Image>
        <Image source={require('../img/logoFb.png')}
          style={{ height: 32, width: 32, marginLeft: 30 }}></Image>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center",bottom:140 }}>
        <Text
          style={{ fontFamily: "Poppins-Regular", color: "black" }}
        >Bạn không có tài khoản? </Text>
        
        <TouchableOpacity>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: "#009245" }}
          > Tạo tài khoản? </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default SignUp

const styles = StyleSheet.create({
  background: {
    height: 350, width: 400, bottom: 180
  }
})