import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView ,ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
useNavigation
const Pay2 = ({ route }) => {
    const { Total } = route.params;
    const lastTotal = Total + 15

    //usestate thông tin thẻ
    const [cardNum, setCardNum,] = useState('')
    const [date, setDate,] = useState('')


    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);


    handleCheckbox = () => {
        if (cardNum == '') {
            ToastAndroid.show('Hãy nhập số thẻ', ToastAndroid.SHORT);
            setModalVisible(modalVisible)
    
        } else if (date == '') {
            ToastAndroid.show('Hãy nhập ngày hết hạn', ToastAndroid.SHORT);
            setModalVisible(modalVisible)   
    
        }else{
            setModalVisible(!modalVisible)
        }
    }
    const { nameU, email, phonenumber, address } = route.params;
    // lây dữ liệu trong lịch sử gd
    const appState = useSelector(state => state.app)
    const mail = appState.user.email


    const [products, setProducts] = useState([])
    // lấy ds sản phẩm từ cart
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post('http://10.0.2.2:2610/users/getcart', { email: mail })
                setProducts(response.data.data);
            } catch (error) {
            }
        }
        getData()
    }, []);


    //         const response = await axios.post('http://10.0.2.2:2610/histories/add', {
    //             email: mail,
    //             id: idd,
    //             price: pricee,
    //             quantity: quantityy,
    //             images: imagess
    //         });
    //         if (response.data.status == true) {
    //             console.log(response.data.status)
    //         } else {
    //             alert('thêm vào giỏ hàng không thành công')
    //         }
    //         console.log(email)
    //     } catch (error) {
    //         // Xử lý lỗi kết nối API
    //         console.log(error);
    //     }
    // };
    const handleAddtoCart = async () => {
        if (products.length > 0) {
            try {
                for (const product of products) {
                    const { name, id, price, quantity, images } = product;
                    const response = await axios.post('http://10.0.2.2:2610/histories/add', {
                        email: mail,
                        name: name,
                        id: id,
                        price: price,
                        quantity: quantity,
                        images: images
                    });

                    if (response.data.status === true) {
                        console.log(response.data.status);
                        navigation.navigate('bottom')
                        alert("thanh toán thành công")
                    } else {
                        alert('Thêm vào giỏ hàng không thành công');
                    }

                }
            } catch (error) {
                // Xử lý lỗi kết nối API
                console.log(error);
            }
        }
    };

    return (
        <ScrollView >
            <View style={styles.header}>
                <TouchableOpacity >
                    <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thanh toán</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.title}>Nhập thông tin thẻ</Text>
                <TextInput style={styles.ip} placeholder='Nhập thông tin thẻ' value={cardNum} onChangeText={setCardNum}></TextInput>
                <Text style={styles.text}>{nameU}</Text>
                <TextInput style={styles.ip} placeholder='Ngày hết hạn' value={date} onChangeText={setDate}></TextInput>
            </View>

            <View style={styles.view}>
                <Text style={styles.title}>Thông tin khách hàng</Text>
                <Text style={styles.text}>{nameU}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{phonenumber}</Text>
                <Text style={styles.text}>{address}</Text>

            </View
            >
            
            <View style={{ marginTop: 30, marginLeft: 30 }}>
                <View style={{ flexDirection: "row", marginTop: 10, alignContent: "space-between" }}>
                    <Text>Tạm tính</Text>
                    <Text style={{ color: "black" }}>                                                      {Total}.000đ</Text>
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
            <TouchableOpacity style={styles.buttonPay} onPress={handleCheckbox} >
                <Text style={styles.textPay}>Tiếp tục</Text>
            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ marginTop: 500, height: 350, backgroundColor: "white" }}>

                    <TouchableOpacity style={styles.buttonPay}
                        onPress={handleAddtoCart}
                    >
                        <Text style={styles.textPay}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </ScrollView>
    )
}

export default Pay2

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
    title: {
        fontFamily: "Lato-Regular", fontSize: 18, color: "black", borderBottomWidth: 1, width: 279, height: 30
    },
    view: {
        alignSelf: "center", marginTop: 10
    },
    text: {
        fontFamily: "Lato-Regular", fontSize: 15, borderBottomWidth: 1, width: 279, height: 40, marginTop: 15
    },
    ip: {
        fontFamily: "Lato-Regular", fontSize: 15, color: "black", borderBottomWidth: 1, width: 279, height: 35, marginTop: 10
    },
    buttonPay: {
        backgroundColor: "#007537", height: 50, width: "90%", alignSelf: "center", borderRadius: 8, marginTop: 10
    },
    textPay: {
        fontFamily: "Lato-Regular", fontSize: 15, color: "white", alignSelf: "center", marginTop: 15
    },

})