const addProduct = (data) => {
    console.log("act",data)
    return {
        type:"NEW_PRODUCT",
        payload: data
    }
}

export default addProduct;