import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Cart = () => {
  const navigation = useNavigation()
  const appState = useSelector(state => state.app)
  const mail = appState.user.email
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post('http://10.0.2.2:2610/users/getcart', { email: mail })
        setProducts(response.data.data);
        console.log("cart", products);
      } catch (error) {
      }
    }
    // Gửi yêu cầu API và lấy dữ liệu
    getData()
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [modaDeletelVisible, setModalDeleteVisible] = useState(false);
  const [Total, setTotal] = useState(0)

  // hàm click check box
  const [backgroundColorCheckbox, setBackgroundColorCheckbox] = useState('white')
  handleCheckbox = () => {
    setBackgroundColorCheckbox('black')
    setModalVisible(!modalVisible)
  }
  // hàm click xóa
  const handleDelete = () => {
    setModalDeleteVisible(!modaDeletelVisible)
  }
  const ModalDelete = () => {
    const handleDeleteProduct = async () => {
      try {
        const response = await axios.post('http://10.0.2.2:2610/users/deletecart', {
          // email:'test',    
          email: mail,
        });
        if(response.status.cart == null){
          alert('Không có sản phẩm')
        }
        else if (response.data.status == true) {
          console.log("xóa thành công");
        } else {
          alert('xóa sản phẩm trong giỏ hàng không thành công')
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={modaDeletelVisible}
        onRequestClose={() => {
          setModalDeleteVisible(!modaDeletelVisible);
        }}>
        <View style={styles.viewDeleteModal}>
          <Text style={styles.textDeleteModal}>Xác nhận xóa tất cả đơn hàng</Text>
          <Text style={styles.textDeleteModal2}>Thao tác này sẽ không thể khôi phục</Text>
          <TouchableOpacity style={styles.buttonPay}
            onPress={handleDeleteProduct}>
            <Text style={styles.textPay}>Đồng ý</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalDeleteVisible(!modaDeletelVisible)}
            style={styles.canceButton}>
            <Text style={styles.cancelText}>Hủy bỏ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
  const handledeleteID = async (id) => {
    try {
      // const { id } = products
      console.log(mail);
      console.log(id);
      const response = await axios.post('http://10.0.2.2:2610/users/deletecartID  ', {
        email: mail,
        id: id,
      });
        if (response.data.status === true) {
        console.log(response.data.status);
        alert("xóa thành công")
      } else  {
        alert('Xoa giỏ hàng không thành công');
      }

    } catch (error) {
      // Xử lý lỗi kết nối API
      console.log(error);
      console.log("lõii", error);
    }

  };
  const renderItem = ({ item }) => {


    const handlePlus = () => {
      item.quantity += 1;
      // Tính tổng giá trị của tất cả sản phẩm trong cart
      const Total = products.reduce((total, product) => total + product.price * product.quantity, 0);
      // Cập nhật state Total
      setTotal(Total);
      console.log("Tổng:", Total);

    };
    const handleMinus = () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        console.log(item.quantity);
      } else {
        alert("Không thể giảm");
      }
    };

    return (
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 30 }}>
        <Image style={{ height: 80, width: 80 }}
          source={{ uri: item.images }}></Image>
        <View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={styles.nameProduct}>{item.name}</Text>
            {/* <Text style={styles.description}>{item.quantity}</Text> */}
          </View>
          <Text style={styles.price}>{item.price}.000đ</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={handleMinus} >
              <Image style={{ height: 30, width: 30 }}
                source={require('../img/minus.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={handlePlus}
            >
              <Image style={{ height: 30, width: 30 }}
                source={require('../img/plus.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handledeleteID(item.id)}
            >
              <Text style={styles.delete}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('bottom')}>
          <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerText}>Giỏ hàng</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Image style={styles.cartIcon} source={require('../img/delete.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", }}>
        <TouchableOpacity style={[styles.CheckBox, backgroundColorCheckbox]}
          onPress={handleCheckbox}
        >
          <Text style={styles.CheckBoxText}>o</Text>
        </TouchableOpacity>
        <FlatList
          data={products}
          renderItem={renderItem}></FlatList>
      </View>
      {/* modal tiến hành thanh toán */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ marginTop: 650 }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={styles.textModalPay}>Tạm tính</Text>
            <Text style={styles.quantityModalPay}>{Total}.000đ</Text>
          </View>
          <TouchableOpacity style={styles.buttonPay}
            onPress={() =>
              navigation.navigate('thanhtoan', { Total })
              // console.log(Total,"truyền"
            }>
            <Text style={styles.textPay}>Tiến hành thanh toán</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ModalDelete />
    </View>

  )
}
export default Cart

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", alignSelf: "center", marginTop: 20
  },
  backIcon: {
    width: 15, height: 25, marginRight: 100
  },
  cartIcon: {
    width: 25, height: 25, marginLeft: 80
  },
  headerText: {
    fontFamily: "Lato-Regular", fontSize: 20, color: "#221F1F",
  },
  nameProduct: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "#221F1F", borderRightWidth: 1, width: 105, height: 30
  },
  description: {
    fontFamily: "Lato-Regular", fontSize: 16, marginLeft: 5
  },
  price: {
    fontFamily: "Lato-Regular", fontSize: 18, color: "#007537",
  },
  quantity: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "black", marginLeft: 15, marginRight: 15, marginTop: 5
  },
  delete: {
    fontFamily: "Lato-Regular", fontSize: 16, color: "black", marginTop: 10, marginLeft: 40, borderBottomWidth: 1
  },
  textModalPay: {
    fontFamily: "Lato-Regular", fontSize: 15, marginLeft: 20
  },
  quantityModalPay: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "black", marginLeft: 220
  },
  buttonPay: {
    backgroundColor: "#007537", height: 50, width: "90%", alignSelf: "center", borderRadius: 8, marginTop: 10
  },
  textPay: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "white", alignSelf: "center", marginTop: 15
  },
  CheckBox: {
    marginLeft: 30, marginTop: 40
  },
  CheckBoxText: {
    fontSize: 50, alignSelf: "center"
  },
  viewDeleteModal: {
    width: "90%", borderRadius: 8, backgroundColor: "white", alignSelf: "center", marginTop: 550
  },
  textDeleteModal: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "black", alignSelf: "center", marginTop: 15
  },
  textDeleteModal2: {
    fontFamily: "Lato-Regular", fontSize: 15, alignSelf: "center", marginTop: 15

  },
  canceButton: {
    backgroundColor: "white", height: 50, width: "90%", alignSelf: "center", borderRadius: 8, marginTop: 5

  },
  cancelText: {
    fontFamily: "Lato-Regular", fontSize: 15, color: "black", alignSelf: "center", marginTop: 15, borderBottomWidth: 1
  }
})