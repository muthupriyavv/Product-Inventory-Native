const initialProduct = (data) => {
    console.log("action",data)
    return{
         type:"ADD_PRODUCT",
         payload:data
    }
}

export default initialProduct;