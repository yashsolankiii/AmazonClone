const products =[]

export const getProductsreducer = (state={products},action)=>{
switch(action.type){
    case "Success_GET_PRODUCTS":
        return {products: action.payload}
    case "Fail_GET_PRODUCTS":
        return {products: action.payload}
    default : return state
}
}