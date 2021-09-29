import * as types from "./type"

export const create = (payload) => ({
    type: types.CREATE,
    data: payload
})
export const read = (payload) => ({
    type: types.READ,
    data: payload
})
export const update = (payload) => ({
    type: types.UPDATE,
    data: payload
})
export const remove = (payload) => ({
    type: types.DELETE,
    data: payload
})
export const list = (payload) => ({
    type: types.LIST,
    data: payload
})
