    import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
    import React from 'react'
    import LinearGradient from 'react-native-linear-gradient';

    const Button = (props) => {
        const { styles,textbtl,styleText,onPress } = props
        return (
            <View   
            >
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.button}
                >
                    <Text
                        style={styleText.textbtl}
                    >{textbtl}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export default Button

