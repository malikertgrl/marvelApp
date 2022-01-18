import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { Colors, Layout } from '../constants'


const RenderItem = ({ item, onPress }) => {
    // const navigation = useNavigation()



    return (
        <View style={[styles.renderItemContainer, { width: Layout.windowWidth / 2 - 10, }]}>

            <TouchableOpacity onPress={onPress} >
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Image
                        style={{ borderRadius: 5, width: Layout.windowWidth / 2 - 30, height: Layout.windowHeight / 6, }} // resizeMode: "contain" 
                        source={{
                            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                    />
                </View>
                <View>

                    <Text style={styles.textStyle}>comics: {item.comics.returned}</Text>
                    <Text style={styles.textStyle}>series:{item.series.returned}</Text>
                    <Text style={styles.textStyle}>stories:{item.stories.returned}</Text>
                    <Text style={styles.textStyle}>events:{item.events.returned}</Text>
                    <Text style={styles.textStyle} >{item.description.length > 1 ? `${item.description.substr(0, 35)}...` : <></>}</Text>



                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem

const styles = StyleSheet.create({

    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.cartColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.cartColor
    }
})
