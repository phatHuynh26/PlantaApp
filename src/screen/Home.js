import { Image, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {

    const handleProductPress = (id) => {
        navigation.navigate('chitiet', { id: id });
    };

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:2610/products')
                setProducts(response.data.data);
                // console.log(response.data.data);
            } catch (error) {
            }
        }
        // Gửi yêu cầu API và lấy dữ liệu
        getData()
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleProductPress(item._id)}>
            <View style={{ backgroundColor: "#F6F6F6", marginTop: 10, width: 150, height: 217, borderRadius: 10, marginLeft: 35, borderRadius: 15 }}>
                {
                    // Lấy ảnh đầu tiên từ mảng images và hiển thị nó
                    item.images.length > 0 &&
                    <Image style={{ width: 137, height: 100, }} source={{ uri: item.images[0] }} />
                }

                <Text
                    style={{ color: "black", fontSize: 16, fontFamily: "Lato-Regular", height: 20 }}
                >{item.name}</Text>
                <Text
                    style={{ color: "grey", fontSize: 14, fontFamily: "Lato-Regular" }}
                >{item.description}</Text>
                <Text
                    style={{ color: "#007537", fontSize: 14, fontFamily: "Lato-Regular", fontWeight: "bold" }}
                >{item.price}.000đ</Text>
            </View></TouchableOpacity>
    )
    // const Product2 = [
    //     {
    //         id: 1,
    //         name: "Planta trắng",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaTrang.png')
    //     },
    //     {
    //         id: 2,
    //         name: "Planta Lemon Balm",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaLemonbalm.png')
    //     },
    //     {
    //         id: 3,
    //         name: "Planta Rose Wood",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaRosewood.png')
    //     },
    //     {
    //         id: 4,
    //         name: "Planta Dove Grey",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaDoveGrey.png')
    //     },
    //     {
    //         id: 5,
    //         name: "Planta Đen",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaBlack.png')
    //     },
    //     {
    //         id: 6,
    //         name: "Planta Matte Black",
    //         price: 250.000,
    //         img: require('./imgSanpham/PlantaMatteBlack.png')
    //     },
    //     {
    //         id: 7,
    //         name: "Bình tưới Sierria nhỏ",
    //         price: 250.000,
    //         img: require('./imgSanpham/BinhNho.png')
    //     },
    //     {
    //         id: 8,
    //         name: "Bình tưới Sierria lớn",
    //         price: 250.000,
    //         img: require('./imgSanpham/BinhLon.png')
    //     },
    //     {
    //         id: 9,
    //         name: "Bình tưới CB2 SAIC",
    //         price: 250.000,
    //         img: require('./imgSanpham/BinhCb2.png')
    //     },
    //     {
    //         id: 10,
    //         name: "Bình xịt Xiaoda",
    //         price: 250.000,
    //         img: require('./imgSanpham/BinhXit.png')
    //     },
    //     {
    //         id: 11,
    //         name: "Bộ cuốc xẻng mini",
    //         price: 250.000,
    //         img: require('./imgSanpham/CuocXeng.png')
    //     },
    //     {
    //         id: 12,
    //         name: "Gía đỡ Finn Terrazo",
    //         price: 250.000,
    //         img: require('./imgSanpham/GiaDo.png')
    //     },
    // ]
    // const renderItem2 = ({ item }) => (
    //     <TouchableOpacity>  
    //         <View style={{ backgroundColor: "#F6F6F6", marginTop: 10, width: 150, height: 217, borderRadius: 10, marginLeft: 35 }}>
    //             <Image
    //                 source={item.img}
    //                 style={{ height: 134, width: 155, borderRadius: 10 }}
    //             ></Image>
    //             <Text
    //                 style={{ color: "black", fontSize: 16, fontFamily: "Lato-Regular", height: 20 }}
    //             >{item.name}</Text>
    //             <Text
    //                 style={{ color: "#007537", fontSize: 14, fontFamily: "Lato-Regular", fontWeight: "bold" }}
    //             >{item.price}.000đ</Text>
    //         </View></TouchableOpacity>
    // )

    return (
        <ScrollView>
            <View>
                <ImageBackground
                    source={require('../img/banner.png')}
                    style={{ height: 250, }}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerText}>Planta - tỏa sáng</Text>
                            <Text style={styles.headerText}>không gian nhà bạn</Text>
                        </View>
                        <View style={{ backgroundColor: "white", borderRadius: 100, height: 50, width: 50, marginLeft: 70 }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('giohang') }}>
                                <Image style={{ height: 30, width: 30, alignSelf: "center", marginTop: 10 }}
                                    source={require('../img/cart.png')}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('danhmuc')}>
                            <Text
                                style={{ fontSize: 16, fontFamily: "Lato-Regular", color: "#007537", marginLeft: 20, }}
                            >Xem hàng mới về
                            </Text>
                        </TouchableOpacity>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require('../img/arrow.png')}></Image>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.headerText}>Cây trồng</Text>
            </View>
            <View>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={products}
                    // keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                    scrollEnabled={false}
                >
                </FlatList>
            </View>
            {/* <Text
                style={{ fontFamily: "Lato-Regular", borderBottomWidth: 2, color: "#221F1F", fontSize: 16, width: 150, marginLeft: 230 }}
            >Xem thêm cây trồng</Text>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.headerText}>Chậu cây </Text></View>
            <View>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={Product2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem2}
                    numColumns={2}
                    scrollEnabled={false}
                >
                </FlatList>
            </View> */}
            <View style={{ marginTop: 20 }}>
                <Text style={styles.headerText}>Combo chăm sóc (mới)</Text>
            </View>
            <View style={{ flexDirection: "row", width: 325, height: 135, marginLeft: 20, borderRadius: 15, backgroundColor: "silver", marginTop: 10 }}>
                <View>
                    <Text
                        style={{ fontFamily: "Lato-Regular", fontSize: 18, color: "black", marginLeft: 10, marginTop: 10 }}
                    >Lemon Balm Grow Kit</Text>
                    <Text
                        style={{ fontFamily: "Lato-Regular", fontSize: 14, width: 174, marginLeft: 10, marginTop: 10 }}
                    >Gồm: hạt giống Lemon Balm gói đất hữu cơ chậu PLanta, market đánh dấu</Text>
                </View>
                <Image source={require('../imgSanpham/banner2.png')}
                    style={{ width: 108, height: 135, marginLeft: 44, borderRadius: 15 }}
                ></Image>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", marginTop: 30,
    },
    headerText: {
        fontFamily: "Lato-Regular",
        fontSize: 24, color: "black", marginLeft: 20, height: 30
    }
})