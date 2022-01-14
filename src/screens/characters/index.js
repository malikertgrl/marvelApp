import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { api } from '../../api'
import { useSelector, useDispatch } from "react-redux"
import { set_characters } from '../../redux/actions'


const Characters = () => {
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)

    const getItem = () => {
        // console.log("api", api)
        fetch(api)
            .then(response => response.json())
            .then(data => dispatch(set_characters(data.data.results)))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getItem()
        console.log("karakterler", JSON.stringify(characters, null, 4))

    }, [])

    return (
        <View >
            <FlatList
                data={characters}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.seperatorStyle} />
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ margin: 5 }}>
                            <TouchableOpacity>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 25 }}>{item.name}</Text>
                                    <Image
                                        style={{ width: 200, height: 200 }}
                                        source={{
                                            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                                        }}
                                    />
                                </View>
                                <View>

                                    <Text>{item.description && `\n${item.description}`}</Text>
                                    <Text>comics: {item.comics.returned}</Text>
                                    <Text>series:{item.series.returned}</Text>
                                    <Text>stories:{item.stories.returned}</Text>



                                </View>
                            </TouchableOpacity>




                        </View>
                    )
                }}
            />



        </View>
    )
}

export default Characters

const styles = StyleSheet.create({
    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" }
})
