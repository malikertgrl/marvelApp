import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import api from '../../api';

const ComicDetails = ({ route }) => {
    const [comicDetails, setComicDetails] = useState([])



    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        console.log(route.params.comicId)
        getItem()
    }, [])

    const getItem = () => {
        const comicId = route.params.comicId
        // api.
        //     comicDetail(route.params.comicId)
        //     .then((response) => {
        //         if (response) {
        //             console.log("comicDetails", response)
        //             // setComicDetails(response.data.results)

        //         } else {
        //             console.log("comicDetail errror")
        //         }
        //     })
        //     .catch(e => console.log(e))
    }

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ComicDetails

const styles = StyleSheet.create({})
