import {
    SET_CHARACTERS,
    SET_COMICS,
    SET_LOADİNG

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

export const set_loading = (val) => (dispatch) => {
    dispatch({
        type: SET_LOADİNG,
        payload: val
    });
}