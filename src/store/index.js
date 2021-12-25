import {createStore} from "redux";
import {rootReducer} from "./reducers";

const initialState = {
    value: 0
}

export default function configureStore(state = initialState){
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}