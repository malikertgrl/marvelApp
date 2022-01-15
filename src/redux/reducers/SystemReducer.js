import {
    SET_CHARACTERS,
    SET_COMICS,
    SET_LOADİNG

} from "../actions/types"


INITIAL_STATE = {
    characters: {},
    comics: {},
    loading: false


}
export const SystemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload };
        case SET_COMICS:
            return { ...state, comics: action.payload };
        case SET_LOADİNG:
            return { ...state, loading: action.payload };
        default:
            return state;
    }

}
