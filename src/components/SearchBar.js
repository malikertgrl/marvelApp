import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from "../constants"
const SearchBar = ({ placeHolder, onChangeText, value }) => {
    return (
        <View style={styles.inputStyle}>
            <TextInput
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    inputStyle: {
        // height: 40,
        // borderWidth: 1,
        // borderBottomColor: "#000",
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 15
    }
})
