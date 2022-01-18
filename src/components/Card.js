import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, LogBox } from 'react-native'
import { Colors, Layout } from "../constants";



const Card = ({ data, where }) => {
    return (
        <View style={{
            margin: 20,
            alignItems: "center",
            width: Layout.windowWidth / 2 + 100,
            backgroundColor: where == "CharacterDetails" ? Colors.cartColor : Colors.comicCartColor,
            borderRadius: 10
        }}>
            <View style={{ alignItems: "center", }}>
                <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{where == "CharacterDetails" ? data[0].name : data[0].title} </Text>
                <Image
                    style={{ resizeMode: "contain", borderRadius: 5, width: Layout.windowWidth / 2 + 160, height: Layout.windowHeight / 3, }} // resizeMode: "contain" 
                    source={{
                        uri: `${data[0].thumbnail.path}.${data[0].thumbnail.extension}`,
                    }}
                />
            </View>

            <View>
                {
                    where == "CharacterDetails" ?
                        <View>
                            <Text style={styles.textStyle}>{data[0].description} </Text>
                            <Text style={styles.textStyle}>comics: {data[0].comics.returned} </Text>
                            <Text style={styles.textStyle}>stories: {data[0].stories.returned} </Text>
                            <Text style={styles.textStyle}>series: {data[0].series.returned}</Text>
                            <Text style={styles.textStyle}>events: {data[0].events.returned}</Text>
                        </View>

                        :

                        <View>
                            <Text style={styles.textStyle}>Page Count: {data[0].pageCount} </Text>
                            <Text style={styles.textStyle}>{data[0].description} </Text>
                            {/* // buraya bir düzenleme yapman gerekecek  */}
                        </View>

                }

            </View>


        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    textStyle: { color: Colors.white9, padding: 5 },

})


{/* <View style={{ margin: 20, alignItems: "center", width: Layout.windowWidth / 2 + 170, height: Layout.windowHeight / 2 + 150, backgroundColor: Colors.comicCartColor, borderRadius: 10 }}>
                                    <View style={{ alignItems: "center", }}>
                                        <Text style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}>{comicDetails[0].title} </Text>
                                        <Image
                                            style={{ borderRadius: 5, width: Layout.windowWidth / 2 + 160, height: Layout.windowHeight / 3, }} // resizeMode: "contain" 
                                            source={{
                                                uri: `${comicDetails[0].thumbnail.path}.${comicDetails[0].thumbnail.extension}`,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textStyle}>Sayfa sayısı: {comicDetails[0].pageCount} </Text>
                                        <Text style={styles.textStyle}>{comicDetails[0].description?.substring(0, 630)} </Text>
                                        {/* <Text style={styles.textStyle}>stories: {comicDetails[0].} </Text>
                                        <Text style={styles.textStyle}>series: {comicDetails[0].series.returned}</Text>
                                        <Text style={styles.textStyle}>events: {comicDetails[0].events.returned}</Text>




                                    </View>

                                </View> */}