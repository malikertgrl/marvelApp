import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import api from '../api'
import { Colors, Layout } from "../constants"

const ComicPanelCreators = ({ data, id, where }) => {
    const [comicCreators, setComicCreators] = useState([])



    // const filterData = comicCreators.filter(x => x.characters.name || console.log(x.characters.name))





    useEffect(() => {
        getItem()
        console.log("id", id, where)

    }, [])

    const getItem = () => {

        api.
            comicCreatores(id)
            .then((response) => {
                if (response) {
                    // console.log("response111", response.data.results)
                    setComicCreators(response.data.results)

                } else {
                    console.log("comicCreators error")
                }
            })
    }

    return (
        <View style={{ margin: 20 }}>
            <FlatList
                horizontal={true}
                keyExtractor={item => item.id}
                data={comicCreators}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.renderItemContainer, { height: Layout.windowHeight / 4, width: Layout.windowWidth / 2 + 100, }]}>

                            <TouchableOpacity>
                                <Text style={styles.textStyle}>{item.fullName}</Text>
                                {/* <Text style={styles.textStyle}>{item.characters.items[0].name}</Text> */}
                                {/* <Text style={styles.textStyle}>{item.characters.items[1].name}</Text> */}
                                {/* <Text style={styles.textStyle}>{item.characters.items[2].name}</Text> */}
                                {/* <FlatList
                                    data={comicCreators}
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
                                        style={{ borderRadius: 5, width: Layout.windowWidth / 2 - 30, height: Layout.windowHeight / 2 - 150, }} // resizeMode: "contain" 
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

export default ComicPanelCreators

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
