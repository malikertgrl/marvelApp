import {
    SET_CHARACTERS,
    SET_COMICS,

} from "./types"


export const set_characters = (item) => (dispatch) => {
    dispatch({
        type: SET_CHARACTERS,
        payload: item
    });
}



export const set_comics = (item) => (dispatch) => {
    dispatch({
        type: SET_COMICS,
        payload: item
    });
}