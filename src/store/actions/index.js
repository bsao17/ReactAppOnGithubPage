export const incrementCounter = (value) => {
    return {
        type: "INCREMENT",
        value
    }
}

export const decrementCounter = (value)=>{
    return {
        type: "DECREMENT",
        value
    }
}

export const resetCounter = (value)=>{
    return {
        type: "RESET",
        value
    }
}