const deleteProduct = (id) => {
    return {
        type:'DELETE_PRODUCT',
        payload:id
    }
}

export default deleteProduct