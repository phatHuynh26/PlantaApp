import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Search = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [show, setShow] = useState(false)
  const [products, setProducts] = useState([])

  const handleProductPress = (id) => {
    navigation.navigate('chitiet', { id: id });
    // console.log(id);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:2610/products')
        // console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
      }
    }
    // Gửi yêu cầu API và lấy dữ liệu
    getData()
  }, []);
  // const Product = [
  //   {
  //     id: 1,
  //     name: "Spider Plant",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/SpiderPlants.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 2,
  //     name: "Song of Indian",
  //     describe: "Ưa sáng",
  //     price: 250.000,
  //     img: require('./imgSanpham/SongOfIndia.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 3,
  //     name: "Pink Anthurium",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/PinkAnthurium.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 4,
  //     name: "Black Love Anthurium",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/BlackLoveAnthurium.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 5,
  //     name: "Grey Star Calarthea",
  //     describe: "Ưa sáng",
  //     price: 250.000,
  //     img: require('./imgSanpham/GreyStrartCalarthea.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 6,
  //     name: "Banana Plant",
  //     describe: "Ưa sáng",
  //     price: 250.000,
  //     img: require('./imgSanpham/BananaPlants.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 7,
  //     name: "Sago Palm",
  //     describe: "Ưa sáng",
  //     price: 250.000,
  //     img: require('./imgSanpham/SagoPalm.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 8,
  //     name: " Palm",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/SagoPalm.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 9,
  //     name: "ZZ Plant",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/ZzPlants.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 10,
  //     name: "Devil's Ivy",
  //     describe: "Ưa bóng",
  //     price: 250.000,
  //     img: require('./imgSanpham/Devil.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 11,
  //     name: "Planta trắng",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaTrang.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 12,
  //     name: "Planta Lemon Balm",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaLemonbalm.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 13,
  //     name: "Planta Rose Wood",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaRosewood.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 14,
  //     name: "Planta Dove Grey",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaDoveGrey.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 15,
  //     name: "Planta Đen",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaBlack.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 16,
  //     name: "Planta Matte Black",
  //     price: 250.000,
  //     img: require('./imgSanpham/PlantaMatteBlack.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 17,
  //     name: "Bình tưới Sierria nhỏ",
  //     price: 250.000,
  //     img: require('./imgSanpham/BinhNho.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 18,
  //     name: "Bình tưới Sierria lớn",
  //     price: 250.000,
  //     img: require('./imgSanpham/BinhLon.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 19,
  //     name: "Bình tưới CB2 SAIC",
  //     price: 250.000,
  //     img: require('./imgSanpham/BinhCb2.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 20,
  //     name: "Bình xịt Xiaoda",
  //     price: 250.000,
  //     img: require('./imgSanpham/BinhXit.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 21,
  //     name: "Bộ cuốc xẻng mini",
  //     price: 250.000,
  //     img: require('./imgSanpham/CuocXeng.png'),
  //     quantity: "còn 156sp"
  //   },
  //   {
  //     id: 22,
  //     name: "Gía đỡ Finn Terrazo",
  //     price: 250.000,
  //     img: require('./imgSanpham/GiaDo.png'),
  //     quantity: "còn 156sp"
  //   },


  // ]
  const filteredData = products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item._id)}>
      <View style={{ backgroundColor: "#F6F6F6", marginTop: 10, width: 375, height: 107, borderRadius: 10, marginLeft: 35, flexDirection: "row" }}>
        {
          // Lấy ảnh đầu tiên từ mảng images và hiển thị nó
          item.images.length > 0 &&
          <Image style={{ height: 77, width: 77, borderRadius: 10 }}
            source={{ uri: item.images[0] }} />
        }

        <View>
          <Text
            style={{ color: "black", fontSize: 16, fontFamily: "Lato-Regular", height: 20, marginTop: 5 }}
          >{item.name}</Text>
          <Text
            style={{ color: "#007537", fontSize: 14, fontFamily: "Lato-Regular", fontWeight: "bold" }}
          >{item.price}.000đ</Text>
          <Text
            style={{ color: "black", fontSize: 14, fontFamily: "Lato-Regular", fontWeight: "bold" }}
          >{item.quantity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
        <Text style={styles.headerText}>Tìm kiếm</Text>
      </View>
      <View style={styles.inputSearch}>
        <TextInput
          placeholder='Tìm kiếm'
          onChangeText={text => {
            setSearchValue(text)
            setShow(text.length > 0);
          }}
          value={searchValue}
        ></TextInput>
        <Image
          style={styles.iconSearch}
          source={require('../img/search.png')}
        ></Image>
      </View>

      {/* dùng để show FlatList */}
      {show && (
        <FlatList
          style={{ marginTop: 30 }}
          data={filteredData}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        // numColumns={2}
        />
      )}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  inputSearch: {
    flexDirection: "row", borderBottomWidth: 1, height: 40, width: 300,
    alignSelf: "center", marginTop: 20
  },
  iconSearch: {
    height: 24, width: 24, marginTop: 10, marginLeft: 200
  },
  header: {
    flexDirection: "row", marginTop: 30, width: 327, alignSelf: "center"
  },
  backIcon: {
    width: 15, height: 25,
  },
  headerText: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "#221F1F", marginLeft: 100
  },

})