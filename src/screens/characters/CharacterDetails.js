import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, LogBox } from 'react-native'
import api from '../../api';
import { Colors } from "../../constants";
import CustomButton from "../../components/CustomButton"
import { WebView } from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from "../../redux/actions"
import Spinner from "../../components/Spinner"
import Panel from "../../components/Panel"


const CharacterDetails = ({ route }) => {
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [characterDetail, setCharacterDetail] = useState([])
    const [isShownMarvel, setIsShownMarvel] = useState(false)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        dispatch(setLoading(true)) // şimdilik resim vs i routes ile aldığım için ekran geldikten sonra tekrar spinner açıyor

        getItem()
        // characterDetail && console.log(JSON.stringify(characterDetail, null, 4))




    }, [])


    const getItem = () => {
        const characterId = route.params.characterId;

        api.
            characterDertail(characterId)
            .then(response => {
                if (response) {
                    setCharacterDetail(response.data.results)
                    // console.log(response.data.results)
                    // console.log("ilk eleman", response.data.results[0])
                    dispatch(setLoading(false))
                } else {
                    dispatch(setLoading(false))
                    console.log("characterDertail error")
                }


            })
            .catch(e => console.log(e))
    }


    return (
        // <ScrollView  >
        <ScrollView style={{ backgroundColor: Colors.backgroundColor }} >


            {
                loading ?
                    <View style={{ position: "relative", marginTop: windowHeight / 2 - 50 }}>
                        <Spinner />
                    </View>
                    :
                    isShownMarvel ?
                        <WebView

                            source={{ uri: characterDetail[0].urls[0].url }} // url ile marvel profiline gidebiliyoruz
                            style={{ width: windowWidth, height: windowHeight }}
                        /> :
                        characterDetail.length > 0 ?  // burada set ettiğimiz dizinin doluluğunu kontrol ediyoruz
                            <View style={{ flex: 1, backgroundColor: Colors.backgroundColor, flex: 1, alignItems: "center", }}>
                                <View style={{ margin: 20, alignItems: "center", width: windowWidth / 2 + 170, height: windowHeight / 2 + 150, backgroundColor: Colors.cartColor, borderRadius: 10 }}>
                                    <View style={{ alignItems: "center", }}>
                                        <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{characterDetail[0].name} </Text>
                                        <Image
                                            style={{ borderRadius: 5, width: windowWidth / 2 + 160, height: windowHeight / 3, }} // resizeMode: "contain" 
                                            source={{
                                                uri: `${characterDetail[0].thumbnail.path}.${characterDetail[0].thumbnail.extension}`,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textStyle}>{characterDetail[0].description} </Text>
                                        <Text style={styles.textStyle}>comics: {characterDetail[0].comics.returned} </Text>
                                        <Text style={styles.textStyle}>stories: {characterDetail[0].stories.returned} </Text>
                                        <Text style={styles.textStyle}>series: {characterDetail[0].series.returned}</Text>
                                        <Text style={styles.textStyle}>events: {characterDetail[0].events.returned}</Text>


                                    </View>

                                </View>
                                <View>
                                    <CustomButton
                                        backgroundColor="#1d3557" // buraya bak bi 
                                        onPress={() => setIsShownMarvel(true)} />
                                </View>
                                <View>
                                    <Panel
                                        data={characterDetail}
                                        characterId={route.params.characterId}
                                    />
                                    {/* buraya panel yapıcaz */}
                                </View>

                            </View>
                            :
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text style={styles.textStyle}> bir hata ile karşılaşıldı...!</Text>
                            </View>

            }
        </ScrollView>




    )
}

export default CharacterDetails

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 }
})
