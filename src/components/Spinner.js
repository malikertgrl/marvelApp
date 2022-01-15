import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'


const Spinner = () => {
    const state = useSelector(state => state.SystemReducer)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("state", state)
    }, [])

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="small" color="#0000ff" />}
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
