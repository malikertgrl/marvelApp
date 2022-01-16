import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


const Spinner = () => {
    const { loading } = useSelector(state => state.SystemReducer)


    useEffect(() => {
        // console.log("loading", loading)
    }, [])

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})
