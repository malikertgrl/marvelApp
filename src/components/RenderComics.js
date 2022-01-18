import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Colors, Layout } from '../constants'



const RenderComics = ({ onPress, item }) => {
    return (
        <View style={[styles.renderItemContainer, { width: Layout.windowWidth / 2 - 10, height: Layout.windowHeight / 3 }]}>

            <TouchableOpacity onPress={onPress} >
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <Image
                        style={{ borderRadius: 5, width: Layout.windowWidth / 2 - 30, height: Layout.windowHeight / 6, }} // resizeMode: "contain" 
                        source={{
                            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>Sayfa Sayısı: {item.pageCount}</Text>

                    <Text style={styles.textStyle} >{item.description?.length > 1 ? `${item.description.substr(0, 35)}...` : <></>}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RenderComics

const styles = StyleSheet.create({

    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.comicBackColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.comicCartColor
    }

})
