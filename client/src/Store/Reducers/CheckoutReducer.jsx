import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, GET_USER_CHECKOUT_RED, UPDATE_CHECKOUT_RED } from "../Constant"
export default function CheckoutReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CHECKOUT_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case GET_CHECKOUT_RED:
        case GET_USER_CHECKOUT_RED:
            return action.payload
        case UPDATE_CHECKOUT_RED:
            newState = state
            index = newState.findIndex((x) => x._id === action.payload._id)
            newState[index].paymentstatus = action.payload.paymentstatus
            newState[index].orderstatus = action.payload.orderstatus
            return newState
        case DELETE_CHECKOUT_RED:
            newState = state
            index = newState.findIndex((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}