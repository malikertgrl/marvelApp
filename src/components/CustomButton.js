import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>Marvel Profili </Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton

const styles = StyleSheet.create({})
