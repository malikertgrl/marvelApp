import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import api from '../api'
import { Colors, Layout } from "../constants"

const ComicCharacterList = ({ comicId, navigation }) => {

    const [comicCharacter, setcomicCharacter] = useState([])

    const getItem = () => {

        api.comicCharacter(comicId)
            .then(response => {
                if (response) {
                    console.log("response00", response)
                    console.log("rsult", response.data.results[0].characters) //

                    setcomicCharacter(response.data.results[0].characters.items)
                    // setcomicCharacter(response.data.results)
                } else {
                    console.log("comicCharacter hata")
                }
            })
    }

    useEffect(() => {
        console.log("ComicCharacterList", comicId)
        getItem()
    }, [])

    return (
        <View style={{ margin: 20 }}>
            <FlatList
                horizontal={true}
                keyExtractor={item => item.id}
                data={comicCharacter}
                renderItem={({ item }) => {
                    return (
                        <View>

                            <TouchableOpacity
                            //  onPress={() => navigation.navigate("CharacterDetails", { characterId: item.id  item.id response da olması lazımdı })}
                            >

                                <View style={[styles.renderItemContainer, { height: Layout.windowHeight / 3 - 30, width: Layout.windowWidth / 2 + 100, }]}>
                                    <Text style={[{ fontWeight: "bold" }, styles.textStyle]}>{item.name}</Text>
                                    <Text style={[{ fontWeight: "bold" }, styles.textStyle]}>{item.resourceURI}</Text>



                                    {/* <Image
                                    style={{}}
                                    source={{ uri:}}
                                /> */}



                                </View>
                            </TouchableOpacity>

                        </View>


                    )
                }}
            />
        </View>
    )
}

export default ComicCharacterList

const styles = StyleSheet.create({
    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.cartColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        // alignItems: "center",
        // justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.comicCartColor
    }
})
