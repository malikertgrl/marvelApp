import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { set_characters, setLoading, set_comics } from '../../redux/actions'
import { Colors } from '../../constants'
import SearchBar from '../../components/SearchBar'
import api from "../../api"
import Spinner from "../../components/Spinner"




const Comics = ({ navigation }) => {

    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [filteredData, setFilteredData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [search, setSearch] = useState("")


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ?
                    item.title.toUpperCase() :
                    "".toUpperCase;

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text)
        } else {
            setFilteredData(masterData);
            setSearch(text)
        }

    }


    const getItem = () => {
        api.
            allComics().then(response => {
                if (response) {
                    console.log("comics", response)
                    dispatch(setLoading(false))
                    setFilteredData(response.data.results)
                    setMasterData(response.data.results)
                    dispatch(set_comics(response.data.results))
                } else {
                    console.log("allComics")
                    dispatch(setLoading(false))
                }

            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        dispatch(setLoading(true))
        getItem()
        // console.log("navigation", navigation.navigate)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: Colors.backgroundColor }}>
            {loading ? <Spinner />
                :
                <View style={styles.container}>
                    <SearchBar
                        value={search}
                        placeHolder="Search Here..."
                        onChangeText={text => searchFilter(text)}
                    />


                    <FlatList
                        keyExtractor={item => item.id}
                        numColumns={2}
                        data={filteredData}
                        renderItem={({ item }) => {
                            return (
                                <View style={[styles.renderItemContainer, { width: windowWidth / 2 - 10, height: windowHeight / 3 }]}>

                                    <TouchableOpacity onPress={() => navigation.navigate("ComicDetails", { comicId: item.id })} >
                                        <View style={{ alignItems: "center" }}>
                                            <Text style={styles.textStyle}>{item.title}</Text>
                                            <Image
                                                style={{ borderRadius: 5, width: windowWidth / 2 - 30, height: windowHeight / 6, }} // resizeMode: "contain" 
                                                source={{
                                                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                                                }}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.textStyle}>Sayfa Sayısı: {item.pageCount}</Text>

                                            <Text style={styles.textStyle} >{item.description?.length > 5 ? `${item.description.substr(0, 35)}...` : <></>}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />

                </View>
            }
        </View>

    )
}

export default Comics

const styles = StyleSheet.create({
    seperatorStyle: { borderBottomWidth: 1, borderBottomColor: "gray" },
    container: { backgroundColor: Colors.backgroundColor },
    textStyle: { color: Colors.white9, padding: 5 },
    renderItemContainer: {

        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: Colors.cartColor
    }

})
