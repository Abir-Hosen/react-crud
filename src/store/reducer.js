import _ from "lodash";
import { CREATE, READ, UPDATE, DELETE, LIST } from "./type"

const initialState = {
    list: [],
    currentIndex: '',
    currentData: '',
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE: 
            return {...state, list:[...state.list, action.data]}
        case READ: 
            return {...state, currentIndex: action.data, currentData: state.list[action.data]}
        case UPDATE: 
            state.list[state.currentIndex]= action.data
            return 
        case DELETE: 
            return {...state, list:[...state.list.filter((obj, index) => index!=action.data)]};
        case LIST: 
            return {...state}
        default: return state
    }
}

export default bookReducer