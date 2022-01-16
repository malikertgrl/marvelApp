import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import api from '../../api';
import { WebView } from 'react-native-webview';
import Spinner from "../../components/Spinner";
import { Colors } from "../../constants";
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from "../../redux/actions"
import CustomButton from '../../components/CustomButton';



const ComicDetails = ({ route }) => {
    const [comicDetails, setComicDetails] = useState([])
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [isShownComics, setIsShownComics] = useState(false)



    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        dispatch(setLoading(true))
        console.log("comicsID", route.params.comicId)
        getItem()
    }, [])

    const getItem = () => {
        const comicId = route.params.comicId
        api.
            comicDetail(route.params.comicId)
            .then((response) => {
                if (response) {
                    dispatch(setLoading(false))
                    console.log("comicDetails", response)
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
        <View style={{ flex: 1, backgroundColor: Colors.comicBackColor }}>



            {
                loading ?
                    <View style={{ position: "relative", marginTop: windowHeight / 2 - 50 }}>
                        <Spinner />
                    </View>
                    :
                    isShownComics ?
                        <View style={{ flex: 1 }}>
                            <WebView

                                source={{ uri: comicDetails[0].urls[0].url }} // url ile marvel profiline gidebiliyoruz
                                style={{ width: windowWidth, height: windowHeight }}
                            />
                        </View>
                        :
                        comicDetails.length > 0 ?  // burada set ettiğimiz dizinin doluluğunu kontrol ediyoruz
                            <View style={{ flex: 1, backgroundColor: Colors.comicBackColor, flex: 1, alignItems: "center", }}>
                                <View style={{ margin: 20, alignItems: "center", width: windowWidth / 2 + 170, height: windowHeight / 2 + 150, backgroundColor: Colors.comicCartColor, borderRadius: 10 }}>
                                    <View style={{ alignItems: "center", }}>
                                        <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{comicDetails[0].title} </Text>
                                        <Image
                                            style={{ borderRadius: 5, width: windowWidth / 2 + 160, height: windowHeight / 3, }} // resizeMode: "contain" 
                                            source={{
                                                uri: `${comicDetails[0].thumbnail.path}.${comicDetails[0].thumbnail.extension}`,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textStyle}>Satfa sayısı: {comicDetails[0].pageCount} </Text>
                                        <Text style={styles.textStyle}>{comicDetails[0].description} </Text>
                                        {/* <Text style={styles.textStyle}>stories: {comicDetails[0].} </Text>
                                        <Text style={styles.textStyle}>series: {comicDetails[0].series.returned}</Text>
                                        <Text style={styles.textStyle}>events: {comicDetails[0].events.returned}</Text>*/}




                                    </View>

                                </View>
                                <View>
                                    <CustomButton
                                        backgroundColor="#7f0000"
                                        onPress={() => setIsShownComics(true)} />
                                </View>
                                <View>
                                    {/* <Panel
                                        data={comicDetails}
                                        characterId={route.params.characterId}
                                    />
                                    buraya panel yapıcaz */}
                                </View>

                            </View>
                            :
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text style={styles.textStyle}> bir hata ile karşılaşıldı...!</Text>
                            </View>

            }
        </View>

    )
}

export default ComicDetails

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 }
})
