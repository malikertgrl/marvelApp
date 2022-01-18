import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { isLogBoxErrorMessage } from 'react-native/Libraries/LogBox/Data/LogBoxData'
import api from '../api'
import { Colors, Layout } from "../constants"


const Creators = ({ data }) => {

    const [creators, setCreators] = useState([])
    useEffect(() => {
        setCreators(data[0].creators.items)
    },
        [])
    return (
        <View>
            {data[0].creators.items.length > 0 ?
                <View style={[{ width: Layout.windowWidth / 2 + 100, }, styles.renderItemContainer]}>
                    <Text style={[{ fontWeight: "bold", fontSize: 18 }, styles.textStyle]}>Creators</Text>

                    <FlatList
                        data={creators}
                        renderItem={({ item }) => {
                            return (
                                <View >
                                    <View >
                                        <Text style={styles.textStyle}>{`${item.name}   role: ${item.role}`}</Text>
                                    </View>
                                </View>

                            )
                        }}
                    />

                </View>
                :
                <View style={[{ width: Layout.windowWidth / 2 + 50, }, styles.renderItemContainer]}>
                    <Text style={[{ fontWeight: "bold", fontSize: 18 }, styles.textStyle]}>Creators Anonim</Text>
                </View>
            }
        </View>


    )
}

export default Creators

const styles = StyleSheet.create({

    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.comicCartColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        alignItems: "center",
        // justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.comicCartColor
    }
})
