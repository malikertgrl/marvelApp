const hash = "c8d77f53230be0cb1d341aae737be02d"
const apiKey = "8344701fa1edef1b10a4feb0ffe0d73f"

const baseUrl = "https://gateway.marvel.com/v1/public/characters"


const api = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"

// "https://gateway.marvel.com/v1/public/characters/1017100?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"


// "https://gateway.marvel.com/v1/public/characters/${characterHero.id}?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d"

export default {
    allCharacters: function () {
        return fetch(
            baseUrl +
            "?ts=1" +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(response => response.json())
            .catch(e => e);
    },
    characterDertail: function (characterId) {
        return fetch(
            baseUrl +
            "/" +
            characterId +
            "?ts=1" +
            "&apikey=" +
            apiKey +
            "&hash=" +
            hash
        )
            .then(response => response.json())
            .catch(e => e);

    }
}