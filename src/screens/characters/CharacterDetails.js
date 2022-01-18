import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, LogBox } from 'react-native'
import api from '../../api';
import { Colors, Layout } from "../../constants";
import CustomButton from "../../components/CustomButton"
import { WebView } from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from "../../redux/actions"
import Spinner from "../../components/Spinner"
import Panel from "../../components/Panel"
import Card from "../../components/Card"


const CharacterDetails = ({ route }) => {
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [characterDetail, setCharacterDetail] = useState([])
    const [isShownMarvel, setIsShownMarvel] = useState(false)



    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        dispatch(setLoading(true)) // şimdilik resim vs i routes ile aldığım için ekran geldikten sonra tekrar spinner açıyor

        getItem()
        // console.log("navi", route.params.navigation)
        // characterDetail && console.log(JSON.stringify(characterDetail, null, 4))




    }, [])


    const getItem = () => {

        api.
            characterDertail(route.params.characterId)
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
        // <ScrollView  > //scroolView içerisinde webView çalışmıyor
        <ScrollView style={{ flex: 1, backgroundColor: Colors.backgroundColor }} >


            {
                loading ?
                    <View style={{ position: "relative", marginTop: Layout.windowHeight / 2 - 50 }}>
                        <Spinner />
                    </View>
                    :
                    isShownMarvel ?
                        <WebView
                            startInLoadingState={() => dispatch(setLoading(true))}
                            onLoad={() => dispatch(setLoading(false))}
                            source={{ uri: characterDetail[0].urls[1].url }} // url ile marvel profiline gidebiliyoruz
                            style={{ width: Layout.windowWidth, height: Layout.windowHeight }}
                        /> :
                        characterDetail.length > 0 ?  // burada set ettiğimiz dizinin doluluğunu kontrol ediyoruz
                            <View style={styles.Card}>

                                <Card
                                    data={characterDetail}
                                    where="CharacterDetails"
                                />

                                <View>
                                    <CustomButton
                                        backgroundColor="#1d3557" // buraya bak bi 
                                        onPress={() => setIsShownMarvel(true)} />
                                </View>
                                <View>
                                    <Panel
                                        data={characterDetail}
                                        id={route.params.characterId}
                                        navigation={route.params.navigation}
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
    textStyle: { color: Colors.white9, padding: 5 },
    Card: { flex: 1, backgroundColor: Colors.backgroundColor, flex: 1, alignItems: "center", }
})
