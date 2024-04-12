import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const AppInput = (props) => {
    const { title, placeholder, styles, err,
        value, onChangeText,icon } = props
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                icon={require('../src/img/eye.png')}
            />
            {
                err && <Text style={styles.err}>{err}</Text>
            }
        </View>
    )
}

export default AppInput

const styles = StyleSheet.create({})