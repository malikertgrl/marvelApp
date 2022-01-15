import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import api from '../../api';
import { Colors } from "../../constants";
import CustomButton from "../../components/CustomButton"
import { WebView } from 'react-native-webview';



const CharacterDetails = ({ route }) => {
    const [characterDetail, setCharacterDetail] = useState([])
    const [isShownMarvel, setIsShownMarvel] = useState(false)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const characterHero = route.params.character;
    useEffect(() => {
        getItem()

    }, [])


    const getItem = () => {
        // fetch(`https://gateway.marvel.com/v1/public/characters/${characterHero.id}?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d`)

        //     .then(response => response.json())
        //     .then(data => console.log(JSON.stringify(data.data.results[0].id, null, 4)))
        //     .catch(e => onsole.log(e));
        api.
            characterDertail(characterHero.id)
            .then(data => console.log(JSON.stringify(data.data.results[0], null, 4)) || setCharacterDetail(data.data.results[0]))
            .catch(e => console.log(e))
    }


    return (
        // <ScrollView style={{ flex: 1, backgroundColor: Colors.backgroundColor }} >

        <View style={{ backgroundColor: Colors.backgroundColor, flex: 1, alignItems: "center", }}>
            <View style={{ margin: 20, alignItems: "center", width: windowWidth / 2 + 150, height: windowHeight / 2 + 130, backgroundColor: Colors.cartColor, borderRadius: 10 }}>
                <View style={{ alignItems: "center", margin: 5 }}>
                    <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{characterHero.name} </Text>
                    <Image
                        style={{ borderRadius: 5, width: windowWidth / 2 + 50, height: windowHeight / 3, }} // resizeMode: "contain" 
                        source={{
                            uri: `${characterHero.thumbnail.path}.${characterHero.thumbnail.extension}`,
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>{characterHero.description} </Text>
                    <Text style={styles.textStyle}>comics: {characterHero.comics.returned} </Text>
                    <Text style={styles.textStyle}>stories: {characterHero.stories.returned} </Text>
                    <Text style={styles.textStyle}>series: {characterHero.series.returned}</Text>

                </View>

            </View>
            <View>
                <CustomButton onPress={() => { }} />
            </View>

        </View>


    )
}

// {
//     isShownMarvel &&
//         <WebView
//             style={{ flex: 1, marginTop: 20 }}
//             source={{ uri: 'https://reactnative.dev/' }} />
// }

export default CharacterDetails

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 }
})
