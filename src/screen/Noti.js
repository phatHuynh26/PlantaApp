import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Noti = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
  const year = currentDate.getFullYear();
  const dayOfWeek = currentDate.getDay
  const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = daysOfWeek[dayOfWeek]
  const appState = useSelector(state => state.app)
  const mail = appState.user.email

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post('http://10.0.2.2:2610/histories/gethistories', { email: mail })
        setProducts(response.data.data);
      } catch (error) {
      }
    }
    getData()
  }, [products]);
  // console.log("product", products);


  const renderItem = ({ item }) => {
    const total = item.quantity * item.price
    return (
      <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 5 }}>
        {
          // Lấy ảnh đầu tiên từ mảng images và hiển thị nó
          item.images.length > 0 &&
          <Image style={{ width: 100, height: 100, }} source={{ uri: item.images[0] }} />
        }

        <View>
          <Text style={styles.notiText}>Đặt hàng thành công</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.descibeText}>{total}.000đ</Text>
          </View>
          <Text style={styles.quantity}>{item.quantity} sản phẩm</Text>
        </View>
      </View>
    )
  }


  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      <View style={styles.date}>
        <Text style={styles.day}>Thứ {dayName}</Text>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.day}>{month}</Text>
        <Text style={styles.day}>{year}</Text>
      </View>

      <FlatList
        style={{ height: 600 }}
        data={products}
        renderItem={renderItem}>
        ListEmptyComponent={() => ( // Optional: Render if data is empty
          <Text style={styles.notiText2}>Không có thông báo nào.</Text>
        )}
      </FlatList>
    </View>
  )
}

export default Noti

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
  date: {
    flexDirection: "row", marginLeft: 50, marginTop: 30, borderBottomWidth: 1, width: "80%"
  },
  day: {
    fontSize: 18, color: 'black', fontFamily: "Lato-Regular", margin: 7
  },
  notiText: {
    fontSize: 18, fontFamily: "Lato-Regular", color: "#007537", marginTop: 10
  },
  nameText: {
    fontSize: 18, fontFamily: "Lato-Regular", color: "black", borderRightWidth: 1, width: 110, marginTop: 10
  },
  descibeText: {
    fontSize: 16, fontFamily: "Lato-Regular", color: "grey", marginLeft: 10, marginTop: 10
  },
  quantity: {
    fontSize: 16, fontFamily: "Lato-Regular", color: "black", marginTop: 10
  },
  notiText2: {
    fontSize: 18, fontFamily: "Lato-Regular", color: "black", marginTop: 100, alignSelf: 'center'
  },
})