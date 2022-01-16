import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import api from '../api'
import { Colors } from "../constants"

const Panel = ({ data, characterId }) => {
    const [characterComics, setCharacterComics] = useState([])



    // const filterData = characterComics.filter(x => x.characters.name || console.log(x.characters.name))



    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    useEffect(() => {
        getItem()
        console.log({ data, characterId })

    }, [])

    const getItem = () => {
        api.
            characterComics(characterId)
            .then((response) => {
                if (response) {
                    console.log("response111", response.data.results)
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
                        <View style={[styles.renderItemContainer, { height: windowHeight / 2, width: windowWidth / 2 + 100, }]}>

                            <TouchableOpacity>
                                <Text style={styles.textStyle}>{item.title}</Text>
                                <Text style={styles.textStyle}>{item.characters.items[0].name}</Text>
                                {/* <Text style={styles.textStyle}>{item.characters.items[1].name}</Text> */}
                                {/* <Text style={styles.textStyle}>{item.characters.items[2].name}</Text> */}
                                {/* <FlatList
                                    data={characterComics}
                                    renderItem={({ item }) => {
                                        return (
                                            <View>
                                                <Text style={styles.textStyle}>{item.characters.items.name}</Text>

                                            </View>
                                        )
                                    }}
                                /> */}



                                {/* <View style={{ alignItems: "center" }}>
                                    <Image
                                        style={{ borderRadius: 5, width: windowWidth / 2 - 30, height: windowHeight / 2 - 150, }} // resizeMode: "contain" 
                                        source={{
                                            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                                        }}
                                    />
                                </View>
                                <View>

                                    <Text >{item.description && `\n${item.description}`}</Text>
                                     <Text style={styles.textStyle}>comics: {item.comics.returned}</Text>
                                    <Text style={styles.textStyle}>series:{item.series.returned}</Text>
                                    <Text style={styles.textStyle}>stories:{item.stories.returned}</Text>



                                </View>*/}
                            </TouchableOpacity>
                        </View>
                        // <View >
                        //     <Text>{item.title}</Text>
                        // </View>
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
