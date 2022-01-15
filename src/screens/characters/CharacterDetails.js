import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import api from '../../api';
import { Colors } from "../../constants";
import CustomButton from "../../components/CustomButton"
import { WebView } from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from "../../redux/actions"
import Spinner from "../../components/Spinner"


const CharacterDetails = ({ route }) => {
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [characterDetail, setCharacterDetail] = useState([])
    const [isShownMarvel, setIsShownMarvel] = useState(false)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const characterHero = route.params.character;
    useEffect(() => {
        dispatch(setLoading(true)) // şimdilik resim vs i routes ile aldığım için ekran geldikten sonra tekrar spinner açıyor

        getItem()

        console.log("karakter id", characterHero.id)
        console.log("loading", loading)


    }, [])


    const getItem = () => {
        api.
            characterDertail(characterHero.id)
            .then(response => {
                if (response) {
                    dispatch(setLoading(false))
                    setCharacterDetail(response.data.results[0])

                } else {
                    dispatch(setLoading(false))
                    console.log("characterDertail")
                }
            })
            .catch(e => console.log(e))
    }


    return (
        // <ScrollView style={{ flex: 1, backgroundColor: Colors.backgroundColor }} >
        <View style={{ flex: 1 }}>


            {
                loading ? <Spinner />
                    :
                    isShownMarvel ?
                        <WebView

                            source={{ uri: characterHero.urls[1].url }}
                            style={{ width: windowWidth, height: windowHeight }}
                        /> :
                        <View style={{ backgroundColor: Colors.backgroundColor, flex: 1, alignItems: "center", }}>
                            <View style={{ margin: 20, alignItems: "center", width: windowWidth / 2 + 150, height: windowHeight / 2 + 130, backgroundColor: Colors.cartColor, borderRadius: 10 }}>
                                <View style={{ alignItems: "center", margin: 5 }}>
                                    <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{characterDetail.name} </Text>
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
                                <CustomButton onPress={() => setIsShownMarvel(true)} />
                            </View>

                        </View>

            }
        </View>




    )
}

export default CharacterDetails

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 }
})
