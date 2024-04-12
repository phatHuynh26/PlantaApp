import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Pay = ({ route }) => {
  const appstate = useSelector(state => state.app)
  const navigation = useNavigation()
  const [textCard, setCard] = useState('black');
  const [textCard2, setCard2] = useState('black');
  const [address, setAddress] = useState('');
  const { Total } = route.params;
  const lastTotal = Total + 15

  //  
  const handleClickCard = (textNumber) => {
    if (textNumber === 1) {
      setCard('#007537');
      setCard2('black')
    } else if (textNumber === 2) {
      setCard2('#007537');
      setCard('black')
    }
  };
  const handleNext = () => {
    if (address =='') {
      ToastAndroid.show('Hãy nhập địa chỉ', ToastAndroid.SHORT);
    } else {
      navigation.navigate("thanhtoan2", { nameU, email, phonenumber, address ,Total})

    }
  }
  // truyen thong tin
  const nameU = appstate.user.name
  const email = appstate.user.email
  const phonenumber = appstate.user.phonenumber
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('giohang')}>
          <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerText}>Thanh toán</Text>
      </View>

      <View style={styles.viewInfo}>
        <Text style={styles.titleInfo}>Thông tin khách hàng</Text>
        <TextInput style={styles.textInput} value={nameU} ></TextInput>
        <TextInput style={styles.textInput} value={email}></TextInput>
        <TextInput style={styles.textInput} value={address} placeholder='Địa chỉ' onChangeText={setAddress}></TextInput>
        <TextInput style={styles.textInput} value={phonenumber}></TextInput>
      </View>

      <View style={styles.shipOption}>
        <Text style={styles.titleInfo}>Phương thức vận chuyển</Text>

        <View style={styles.GHN}>
          <TouchableOpacity onPress={() => { handleClickCard(1) }}>
            <Text style={[styles.cost, { color: textCard }]}>Giao hàng nhanh - 15 000đ</Text>
          </TouchableOpacity>
          <Text style={styles.time}>Dự kiến giao hàng 5-7/9</Text>
        </View>
        <View style={styles.cod}>
          <TouchableOpacity onPress={() => { handleClickCard(2) }}>
            <Text style={[styles.cost, { color: textCard2 }]}>Giao hàng nhanh - 15 000đ</Text></TouchableOpacity>
          <Text style={styles.time}>Dự kiến giao hàng 5-7/9</Text>
        </View>

        <View style={styles.payOptions}>
          <Text style={styles.titleInfo}>Hình thức thanh toán</Text>
          <Text style={styles.payText}>Thẻ visa</Text>
          <Text style={styles.payText}>Thanh toán khi nhận hàng</Text>
        </View>
      </View>
      <View style={{ marginLeft: 30 }}>
        <View style={{ flexDirection: "row", marginTop: 10, alignContent: "space-between" }}>
          <Text>Tạm tính</Text>
          <Text style={{ color: "black" }}>                                                       {Total}.000đ</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, alignContent: "space-between" }}>
          <Text>Phí vận chuyển</Text>
          <Text style={{ color: "black" }}>                                            15.000đ</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, alignContent: "space-between" }}>
          <Text style={{ color: "#007537", fontSize: 16 }}>Tổng cộng</Text>
          <Text style={{ color: "#007537", fontSize: 16 }}>                                            {lastTotal}.000</Text>
        </View>

      </View>
      <TouchableOpacity style={styles.buttonPay} onPress={handleNext}>
        <Text style={styles.textPay}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", marginTop: 30, width: 327, alignSelf: "center"
  },
  backIcon: {
    width: 15, height: 25,
  },
  headerText: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "#221F1F", marginLeft: 100
  },
  viewInfo: {
    alignSelf: "center", marginTop: 20
  },
  titleInfo: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "black", borderBottomWidth: 1, width: 279, height: 30

  },
  textInput: {
    fontFamily: "Lato-Regular", color: "black", borderBottomWidth: 1, width: 279, fontSize: 15, height: 40
  },
  shipOption: {
    alignSelf: "center", marginTop: 20,

  },
  cost: {
    fontFamily: "Lato-Regular", fontSize: 18, width: 279, height: 30, marginTop: 10,
  },
  time: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "black", borderBottomWidth: 1, width: 279, height: 30
  },
  payOptions: {
    marginTop: 20
  },
  payText: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "black", width: 279, height: 30, marginTop: 10
  },
  buttonPay: {
    backgroundColor: "#007537", height: 50, width: "90%", alignSelf: "center", borderRadius: 8, marginTop: 10
  },
  textPay: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "white", alignSelf: "center", marginTop: 15
  },
})