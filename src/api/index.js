import { ApiUtils } from "./apiUtils"


const hash = "c8d77f53230be0cb1d341aae737be02d"
const apiKey = "8344701fa1edef1b10a4feb0ffe0d73f"

const baseUrl = "https://gateway.marvel.com/v1/public/characters"
const baseUrlComics = "https://gateway.marvel.com/v1/public/comics"



const timestamp = "?ts=1"


const api = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"

// "https://gateway.marvel.com/v1/public/characters/1017100?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"


// "https://gateway.marvel.com/v1/public/characters/${characterHero.id}?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"


// bu comics için  https://gateway.marvel.com/v1/public/characters/1017100/comics?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d

export default {
    allCharacters: function () {
        return fetch(
            baseUrl +
            timestamp +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    },
    characterDertail: function (characterId) {
        return fetch(
            baseUrl + "/" +
            characterId +
            timestamp +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);

    },

    characterComics: function (characterId) {
        return fetch(
            baseUrl + "/" +
            characterId + "/" +
            "comics" +
            timestamp +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);



    },

    allComics: function () {
        return fetch(
            baseUrlComics +
            timestamp +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    },

    comicDetail: function (comicId) {
        return fetch(
            baseUrlComics + "/" +
            comicId +
            timestamp +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);

    }
}