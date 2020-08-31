const editItem = (data) => {
    return{
        type : "EDIT_PRODUCT",
        payload: data
    }
}

export default editItem;