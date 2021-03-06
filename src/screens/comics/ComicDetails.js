import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, LogBox } from 'react-native'
import api from '../../api';
import { WebView } from 'react-native-webview';
import Spinner from "../../components/Spinner";
import { Colors, Layout } from "../../constants";
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from "../../redux/actions"
import CustomButton from '../../components/CustomButton';
import Card from "../../components/Card"
import Creators from "../../components/Creators"
import ComicCharacterList from "../../components/ComicCharacterList"



const ComicDetails = ({ route }) => {
    const [comicDetails, setComicDetails] = useState([])
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [isShownComics, setIsShownComics] = useState(false)



    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        dispatch(setLoading(true))
        // console.log("comicsID", route.params.comicId)
        getItem()
    }, [])

    const getItem = () => {
        api.
            comicDetail(route.params.comicId)
            .then((response) => {
                if (response) {
                    dispatch(setLoading(false))
                    // console.log("comicDetails", response)
                    setComicDetails(response.data.results)

                } else {
                    console.log("comicDetail errror")
                    dispatch(setLoading(false))

                }
            })
            .catch(e => console.log(e))
    }
    // aşağıdaki komponent scrollview olduğunda webView doğru çalışmıyor 
    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.comicBackColor }}>
            <View style={{ alignItems: "center" }}>




                {
                    loading ?
                        <View style={{ position: "relative", marginTop: Layout.windowHeight / 2 - 50 }}>
                            <Spinner />
                        </View>
                        :
                        isShownComics ?
                            <View style={{ flex: 1 }}>
                                <WebView
                                    startInLoadingState={() => dispatch(setLoading(true))}
                                    onLoad={() => dispatch(setLoading(false))}
                                    source={{ uri: comicDetails[0].urls[0].url }} // url ile marvel profiline gidebiliyoruz
                                    style={{ width: Layout.windowWidth, height: Layout.windowHeight }}
                                />
                            </View>
                            :
                            comicDetails.length > 0 ?  // burada set ettiğimiz dizinin doluluğunu kontrol ediyoruz
                                <View style={styles.Card}>
                                    <Card
                                        data={comicDetails}
                                        where="ComicDetails"
                                    />

                                    <View>
                                        <CustomButton
                                            backgroundColor="#7f0000"
                                            onPress={() => setIsShownComics(true)} />
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <View>
                                            <Creators data={comicDetails} />

                                        </View>

                                        <View>
                                            <ComicCharacterList
                                                comicId={route.params.comicId}
                                                navigation={route.params.navigation} />
                                        </View>




                                    </View>

                                </View>
                                :
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text style={styles.textStyle}> bir hata ile karşılaşıldı...!</Text>
                                </View>

                }
            </View>

        </ScrollView>

    )
}

export default ComicDetails

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 },
    Card: { flex: 1, backgroundColor: Colors.comicBackColor, alignItems: "center", }
})
