import { getProductsreducer } from "./Productsreducer";
import {comnoneReducers} from "redux";

const rootReducers = comnoneReducers({
    getproductsdata:getProductsreducer
});

export default rootReducers;

// create combine reducer