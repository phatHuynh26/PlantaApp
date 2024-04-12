import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Image } from 'react-native-elements'

const DemoLaySp = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:2610/products')
        // console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {

      }
    }
    // Gửi yêu cầu API và lấy dữ liệu
    getData()

  }, []);
  //  for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].images);
  // }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={{ backgroundColor: "red", color: "black", fontSize: 25 }}>{item.description}</Text>
        {/* {
          item.images.map((item, index) => {
            return (
              <Image style={{ width: 100, height: 100 }} source={{ uri: item }} />
            )
          })
        } */}
        {
          // Lấy ảnh đầu tiên từ mảng images và hiển thị nó
          item.images.length > 0 &&
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.images[0] }} />
        }


      </View>
    )
  }
  return (
    <View>
      <Text>ldldldldl</Text>
      <FlatList
        data={data} // Dữ liệu được gán vào FlatList
        renderItem={renderItem} // Hàm render mỗi mục
      />
    </View>
  )
}

export default DemoLaySp

const styles = StyleSheet.create({})