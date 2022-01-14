import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, } from 'react-native'
import { Colors } from '../constants'


const RenderItem = ({ item }) => {
    // useEffect(() => {
    //     console.log("item", item)
    // }, [])

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.renderItemContainer, { width: windowWidth / 2 - 10, }]}>

            <TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Image
                        style={{ borderRadius: 5, width: windowWidth / 2 - 30, height: windowHeight / 6, }} // resizeMode: "contain" 
                        source={{
                            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                    />
                </View>
                <View>

                    {/* <Text >{item.description && `\n${item.description}`}</Text> */}
                    <Text style={styles.textStyle}>comics: {item.comics.returned}</Text>
                    <Text style={styles.textStyle}>series:{item.series.returned}</Text>
                    <Text style={styles.textStyle}>stories:{item.stories.returned}</Text>



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
