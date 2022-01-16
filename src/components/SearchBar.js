import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from "../constants"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ placeHolder, onChangeText, value }) => {
    return (
        <View style={styles.inputStyle}>
            <View>
                <TextInput
                    value={value}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{ margin: 10 }}>
                <FontAwesome5 name="search" size={18} color="gray" />

            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // flex: 1
        // height: 40,
        // borderWidth: 1,
        // borderBottomColor: "#000",
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 15
    }
})
