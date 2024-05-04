import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([])
    const uaSang = products.filter(product => {
        return product.description === 'Ưa sáng';
    });
    const uaBong = products.filter(product => {
        return product.description === 'Ưa bóng';
    });
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:2610/products')
                setProducts(response.data.data)
                // console.log(response.data.data);
            } catch (error) {
            }
        }
        // Gửi yêu cầu API và lấy dữ liệu
        getData()
    }, [])
    const [buttonColors, setButtonColors] = useState({
        all: 'white',
        new: 'white',
        shadeLoving: 'white',
        sunLoving: 'white'
    });
    const [dataToShow, setDataToShow] = useState(products); 
    const handlePress = (buttonType) => {
        const updatedColors = {
            all: 'white',
            new: 'white',
            shadeLoving: 'white',
            sunLoving: 'white'
        };
        updatedColors[buttonType] = '#007537';
        setButtonColors(updatedColors);

        switch (buttonType) {
            case 'all':
                setDataToShow(products);
                break;
            case 'new':
                setDataToShow(products);
                break;
            case 'shadeLoving':
                setDataToShow(uaBong);
                break;
            case 'sunLoving':
                setDataToShow(uaSang);
                break;
            default:
                setDataToShow(products);
        }
    };

    const renderItem = ({ item }) => (
        <ScrollView>
        <TouchableOpacity>
            <View style={{ backgroundColor: "#F6F6F6", marginTop: 10, width: 150, height: 217, borderRadius: 10, marginLeft: 35 }}>
                {
                    // Lấy ảnh đầu tiên từ mảng images và hiển thị nó
                    item.images.length > 0 &&
                    <Image style={{ height: 134, width: 155, borderRadius: 10 }} source={{ uri: item.images[0] }} />
                }

                <Text
                    style={{ color: "black", fontSize: 16, fontFamily: "Lato-Regular", height: 20 }}
                >{item.name}</Text>
                <Text
                    style={{ color: "grey", fontSize: 14, fontFamily: "Lato-Regular" }}
                >{item.describe}</Text>
                <Text
                    style={{ color: "#007537", fontSize: 14, fontFamily: "Lato-Regular", fontWeight: "bold" }}
                >{item.price}.000đ</Text>
            </View></TouchableOpacity>
            </ScrollView>
    )
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('bottom')}>
                    <Image style={styles.backIcon} source={require('../img/back.png')}></Image></TouchableOpacity>
                <Text style={styles.headerText}>CÂY TRỒNG</Text>
                <Image style={styles.cartIcon} source={require('../img/cart.png')}></Image>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonColors.all }]} onPress={() => handlePress('all')}>
                    <Text style={styles.buttonText}>Tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonColors.new }]} onPress={() => handlePress('new')}>
                    <Text style={styles.buttonText}>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonColors.shadeLoving }]} onPress={() => handlePress('shadeLoving')}>
                    <Text style={styles.buttonText}>Ưa bóng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonColors.sunLoving }]} onPress={() => handlePress('sunLoving')}>
                    <Text style={styles.buttonText}>Ưa sáng</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ marginTop: 30 }}
                data={dataToShow}
                renderItem={renderItem}
                numColumns={2}
            >
            </FlatList>
        </View>
    )
}

export default Category

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
    buttonView: {
        alignSelf: "center", marginTop: 20, flexDirection: "row", margin: 10,
    },
    button: {
        height: 28, width: 73, borderRadius: 4,
        margin: 10
    },
    buttonText: {
        fontSize: 14, fontFamily: "Lato-Regular", color: "grey", alignSelf: "center", marginTop: 5
    }
})
