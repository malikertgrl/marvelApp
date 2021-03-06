import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { set_characters, setLoading, set_comics } from '../../redux/actions'
import { Colors, Layout } from '../../constants'
import SearchBar from '../../components/SearchBar'
import api from "../../api"
import Spinner from "../../components/Spinner"
import RenderComics from "../../components/RenderComics"



const Comics = ({ navigation }) => {

    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [filteredData, setFilteredData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [search, setSearch] = useState("")



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
                    // console.log("comics", response)
                    dispatch(setLoading(false))
                    setFilteredData(response.data.results)
                    setMasterData(response.data.results)
                    dispatch(set_comics(response.data.results))
                } else {
                    console.log("allComics hata")
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
        <View style={styles.container}>

            {loading ? <Spinner />
                :
                <View style={styles.innerContainer}>
                    <View>
                        <SearchBar
                            value={search}
                            placeHolder="Search Here..."
                            onChangeText={text => searchFilter(text)}
                        />
                    </View>

                    <View>
                        <FlatList
                            keyExtractor={item => item.id}
                            numColumns={2}
                            data={filteredData}
                            renderItem={({ item }) => {
                                return (
                                    <RenderComics
                                        onPress={() => navigation.navigate("ComicDetails", { comicId: item.id, navigation: navigation })}
                                        item={item} />

                                )
                            }}
                        />
                    </View>



                </View>
            }
        </View>

    )
}

export default Comics

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.comicBackColor },
    innerContainer: { backgroundColor: Colors.comicBackColor },


})
