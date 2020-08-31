const { combineReducers } = require("redux");
import productListReducer from "../reducers/productReducer"

const reducers = combineReducers({
    productList : productListReducer
})

export default reducers;