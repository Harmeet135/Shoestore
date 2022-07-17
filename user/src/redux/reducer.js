import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant"

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("ADD_TO_CART condition ", action.data)
            return [...data, action.data]

        case REMOVE_FROM_CART:
            console.log("workes")
            const remainitem = data.filter((item) => item.id !== action.data)
            return [...remainitem]
        default:
            return data
    }
}