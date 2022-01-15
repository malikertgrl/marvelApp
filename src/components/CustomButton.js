import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from "../constants"

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ backgroundColor: Colors.cartColor, borderRadius: 5, padding: 5, }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Marvel Profili </Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton

const styles = StyleSheet.create({})
