import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import api from '../api'
import { Colors, Layout } from "../constants"


const Panel = ({ data, id, navigation }) => {
    const [characterComics, setCharacterComics] = useState([])



    // const filterData = characterComics.filter(x => x.characters.name || console.log(x.characters.name))





    useEffect(() => {
        getItem()
        // console.log("id", navigation,)

    }, [])

    const getItem = () => {

        api.
            characterComics(id)
            .then((response) => {
                if (response) {
                    // console.log("response111", response.data.results)
                    setCharacterComics(response.data.results)

                } else {
                    console.log("characterComics error")
                }
            })
    }

    return (
        <View style={{ margin: 20 }}>
            <FlatList
                horizontal={true}
                keyExtractor={item => item.id}
                data={characterComics}
                renderItem={({ item }) => {
                    return (
                        <View>

                            <TouchableOpacity onPress={() => navigation.navigate("ComicDetails", { comicId: item.id })}>
                                <View style={[styles.renderItemContainer, { height: Layout.windowHeight / 3 - 30, width: Layout.windowWidth / 2 + 100, }]}>
                                    <Text style={[{ fontWeight: "bold" }, styles.textStyle]}>{item.title}</Text>

                                    <Text style={styles.textStyle}>Characters</Text>
                                    <Text style={[styles.textStyle]}>{item.characters.items.map(x => x.name)}</Text>


                                </View>
                            </TouchableOpacity>
                        </View>


                    )
                }}
            />
        </View>
    )
}

export default Panel

const styles = StyleSheet.create({
    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.cartColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        // alignItems: "center",
        // justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.cartColor
    }
})
