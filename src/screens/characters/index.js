import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { api } from '../../api'
import { useSelector, useDispatch } from "react-redux"


const Characters = () => {
    const state = useSelector(state => state.SystemReducer)

    const getItem = () => {
        // console.log("api", api)
        fetch(api)
            .then(response => response.json())
            .then(data => console.log("eee"))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getItem()
        console.log(state)
    }, [])
    return (
        <View >
            <FlatList />
        </View>
    )
}

export default Characters

const styles = StyleSheet.create({})
