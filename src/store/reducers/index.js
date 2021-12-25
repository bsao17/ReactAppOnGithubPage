

export const rootReducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            }
        case "DECREMENT":
            return {
                ...state,
                value : state.value - 1
            }
        case "RESET":
            return {
                ...state,
                value: state.value = 0
            }
        default:
            return state
    }
}