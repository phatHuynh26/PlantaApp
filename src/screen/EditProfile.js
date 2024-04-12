import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const EditProfile = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
        <Text style={styles.headerText}>Chỉnh sửa thông tin</Text>
      </View>

      <Image
        source={require('../img/avatar.png')}
        style={styles.ava}
      ></Image>

      <View style={styles.noteView}>
        <Text style={styles.noteText}>Thông tin sẽ được lưu cho lần mua kế tiếp</Text>
        <Text style={styles.noteText}>Bấm vào thông tin chi tiết để chỉnh sửa</Text>
      </View>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          placeholder='Trần Minh Trí'
          placeholderTextColor="grey"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder='tranminhtri@gmail.com'
          placeholderTextColor="grey"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder='Hồ Chí Minh'
          placeholderTextColor="grey"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder='0899320076'
          placeholderTextColor="grey"
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.buttonSave}>
        <Text style={styles.saveText}>LƯU THÔNG TIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", marginTop: 20
  },
  backIcon: {
    width: 15, height: 25, marginLeft: 30
  },
  headerText: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "#221F1F", marginLeft: 70
  },
  ava: {
    height: 90, width: 90, marginTop: 30, alignSelf: "center"
  },
  noteView: {
    alignSelf: "center", marginTop: 50
  },
  noteText: {
    fontFamily: "Lato-Regular", fontSize: 16, color: "black",
  },
  viewInput: {
    width: 300, height: 42, marginLeft: 50, marginTop: 50
  },
  input: {
    height: 50, width: 300, borderBottomWidth: 1, borderBottomColor: "grey",
    fontFamily: "Lato-Regular", color: "black"
  },
  buttonSave: {
    borderRadius: 10, width: 327, height: 50, alignSelf: "center",backgroundColor:"red",marginTop:250

  },
  saveText: {
    alignSelf: "center", fontSize: 20, fontFamily: "Lato-Regular", color: "white", marginTop: 10
  }
})