import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import { api } from '../../api'
import { useSelector, useDispatch } from "react-redux"
import { set_characters } from '../../redux/actions'
import RenderItem from '../../components/RenderItem'
import { Colors } from '../../constants'


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
        // console.log("karakterler", JSON.stringify(characters, null, 4))
        console.log({ Colors })

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.backgroundColor} />

            <FlatList
                keyExtractor={item => item.id}
                numColumns={2}
                data={characters}
                renderItem={({ item }) => {
                    return (
                        <RenderItem item={item} />
                    )
                }}
            />

        </View>
    )
}

export default Characters

const styles = StyleSheet.create({
    container: { backgroundColor: Colors.backgroundColor, },

})
