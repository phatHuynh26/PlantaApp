import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../reduce/Reducer';

const Profile = () => {
  const appstate = useSelector(state => state.app)
  const name = appstate.user.name
  const email = appstate.user.email
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.headerText}>Profile</Text>
      <View style={styles.inforView}>
        <Image
          style={{ height: 39, width: 30 }}
          source={require('../img/avatar.png')}
        ></Image>
        <View style={{ marginLeft: 30 }}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.mailText}> {email} </Text>
        </View>
      </View>

      <View style={styles.optionView}>
        <Text style={styles.titleOption}>Chung</Text>
        <Text style={styles.optionText}
          onPress={() => navigation.navigate('chinhsua')}
        >Chỉnh sửa thông tin</Text>
        <Text style={styles.optionText}>Cẩm nang trồng cây</Text>
        <Text style={styles.optionText}>Lịch sử giao dịch</Text>
        <Text style={styles.optionText}>Q & A</Text>
        <Text style={styles.titleOption}>Bảo mật và điều khoản</Text>
        <Text style={styles.optionText}>Điều khoản và điều kiện</Text>
        <Text style={styles.optionText}>Chính sách quyền riêng tư</Text>

        <TouchableOpacity onPress={()=>dispatch(logout())}>
          <Text style={styles.logOut}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "#221F1F", marginTop: 30, alignSelf: "center"
  },
  inforView: {
    marginLeft: 40, flexDirection: "row", marginTop: 50
  },
  nameText: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "black"
  },
  mailText: {
    fontFamily: "Lato-Regular", fontSize: 16, color: "grey"
  },
  optionView: {
    marginTop: 30, marginLeft: 30,
  },
  titleOption: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "grey", borderBottomWidth: 1, height: 30, width: 315, margin: 10
  },
  optionText: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "black", margin: 10
  },
  logOut: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "red", margin: 10
  }
})
