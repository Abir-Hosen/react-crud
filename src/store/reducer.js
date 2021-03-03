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
            return {...state}
        case DELETE: 
            return {...state}
        case LIST: 
            return {...state}
        default: return state
    }
}

export default bookReducer