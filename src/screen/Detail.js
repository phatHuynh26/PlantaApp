import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Detail = ({ route }) => {
    const appstate = useSelector(state => state.app)
    const navigation = useNavigation()
    const { id } = route.params
    const [test, setTest] = useState('')
    const [product, setProducts] = useState('')
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://10.0.2.2:2610/products/` + id);
                // console.log("tổng........", response.data.data);
                setProducts(response.data.data)
                // console.log(response.data.data.images[0]);
                setTest(response.data.data.images[0])
            } catch (error) {
                console.error('Lỗi khi lấy sản phẩm:', error);
            }
        };
        fetchProduct();
    }, [id]);
    const handleAddtoCart = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:2610/users/addtocart', {
                // email:'test',    
                id:product._id,
                email: appstate.user.email,
                name: product.name,
                quantity: quantity,
                price: product.price,
                images: test
            });
            if (response.data.status == true) {
                navigation.navigate('giohang')
            } else {
                alert('thêm vào giỏ hàng không thành công')
            }
            console.log(email)
        } catch (error) {
            // Xử lý lỗi kết nối API
            console.log(error);
        }
    };

    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(250000);
    const [buttonColor, setButtonColor] = useState('#007537'); // Màu mặc định

    useEffect(() => {
        if (cost === 0) {
            setButtonColor('grey'); // Đổi màu nền thành xám khi cost = 0
        } else {
            setButtonColor('#007537'); // Màu mặc định
        }
    }, [cost]);

    const handleMax = () => {
        setQuantity(quantity + 1);
        setCost((quantity + 1) * 250000);
    };

    const handleMin = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setCost((quantity - 1) * 250000);
        } else {
            alert('Không thể giảm');
        }
    };
    // console.log("teeeee",test);
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('bottom')}>
                    <Image style={styles.backIcon} source={require('../img/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.headerText}>{product.name}</Text>
                <Image style={styles.cartIcon} source={require('../img/cart.png')}></Image>
            </View>
            {
                test != '' ? <Image style={styles.imgProducts} source={{ uri: test }}></Image> : <Text>null</Text>
            }

            {/* <Image style={styles.imgProducts} source={{uri:test}}/>            */}
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cây trồng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{product.description}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textPrice}>{product.price}.000đ</Text>
            <View style={styles.detailView}>
                <Text style={styles.titleDetail} >Chi tiết sản phẩm</Text>


                <Text style={styles.infoText}>Kích cỡ                                                        Nhỏ</Text>
                <Text style={styles.infoText}>Xuất xứ                                               Châu Phi</Text>
                <Text style={styles.infoText}>Tình trạng                                        Còn 156sp</Text>
            </View>

            <View style={styles.orderView}>
                <View style={{ flexDirection: 'row', width: 327, alignSelf: 'center' }}>
                    <Text style={styles.orderText}>Đã chọn 1 sản phẩm</Text>
                    <Text style={styles.orderText}>Tạm tính</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={handleMin}>
                        <Image style={styles.minIcon} source={require('../img/minus.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={handleMax}>
                        <Image style={styles.maxIcon} source={require('../img/plus.png')}></Image>
                    </TouchableOpacity>

                    <Text style={styles.cost}>{cost}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleAddtoCart}
                disabled={cost === 0}
                style={[styles.buttonBuy, { backgroundColor: buttonColor }]}>
                <Text style={styles.buyText}>Chọn Mua</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", alignSelf: "center", marginTop: 10, marginTop: 30
    },
    backIcon: {
        width: 15, height: 25, marginRight: 100
    },
    cartIcon: {
        width: 25, height: 25, marginLeft: 80
    },
    headerText: {
        fontFamily: "Lato-Regular", fontSize: 25, color: "#221F1F",
    },
    imgProducts: {
        width: 375, height: 279, marginTop: 5
    },
    buttonView: {
        flexDirection: "row", marginLeft: 30, marginTop: 30
    },
    button: {
        borderRadius: 5, backgroundColor: "#007537", width: 68, height: 28, marginLeft: 10
    },
    buttonText: {
        alignSelf: "center", fontSize: 14, fontFamily: "Lato-Regular", color: "white", marginTop: 2
    },
    textPrice: {
        fontFamily: "Lato-Regular", fontSize: 24, color: "#007537", marginLeft: 40, marginTop: 10
    },
    detailView: {
        marginLeft: 40, marginTop: 10
    },
    titleDetail: {
        borderBottomWidth: 2, width: 279, marginTop: 10, fontFamily: "Lato-Regular", fontSize: 20, color: "#3A3A3A"
    },
    infoText: {
        borderBottomWidth: 1, width: 279, marginTop: 10, fontFamily: "Lato-Regular", fontSize: 16, color: "#3A3A3A"
    },
    orderView: {
        width: 327, height: 82, alignSelf: "center", marginTop: 15,
    },
    orderText: {
        width: 279, marginTop: 10, fontFamily: "Lato-Regular", fontSize: 16,

    },
    minIcon: {
        height: 30, width: 30, marginRight: 20
    },
    maxIcon: {
        height: 30, width: 30, marginHorizontal: 20
    },
    quantity: {
        fontFamily: "Lato-Regular", fontSize: 16, color: "black", marginTop: 5
    },
    cost: {
        fontFamily: "Lato-Regular", fontSize: 25, color: "red", marginLeft: 125
    },
    buttonBuy: {
        borderRadius: 10, width: 327, height: 50, marginLeft: 10, alignSelf: "center"

    },
    buyText: {
        alignSelf: "center", fontSize: 20, fontFamily: "Lato-Regular", color: "white", marginTop: 10
    }
})
