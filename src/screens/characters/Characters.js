import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { set_characters } from '../../redux/actions'
import RenderItem from '../../components/RenderItem'
import { Colors } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'
import SearchBar from '../../components/SearchBar'
import api from "../../api"



const Characters = ({ navigation }) => {

    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.SystemReducer)
    const [filteredData, setFilteredData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [search, setSearch] = useState("")

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ?
                    item.name.toUpperCase() :
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
            allCharacters().then((data) => {
                setFilteredData(data.data.results)
                setMasterData(data.data.results)
                dispatch(set_characters(data.data.results))
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getItem()
        // console.log("navigation", navigation.navigate)
    }, [])

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={Colors.backgroundColor} />

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
                        <RenderItem
                            item={item}
                            onPress={() => navigation.navigate("CharacterDetails", { character: item })

                            }

                        />
                    )
                }}
            />

        </View>
    )
}

export default Characters

const styles = StyleSheet.create({
    container: { backgroundColor: Colors.backgroundColor, },

})
