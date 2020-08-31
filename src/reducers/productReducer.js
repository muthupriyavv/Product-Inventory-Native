let productList=[]

const productListReducer = (state = null,action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            console.log("reducer",action.payload)
            productList = action.payload
            break;
        case 'NEW_PRODUCT':
            console.log("red",action.payload)
            let newData = action.payload
            productList.push(newData)
            break;
        case 'DELETE_PRODUCT':
            let id = action.payload
            let newList = productList.filter(product => product.id !== id)
            productList = newList
            break;
            case 'EDIT_PRODUCT':
                let updatedData = action.payload
                let data = {
                    name : updatedData.name,
                    price : updatedData.price,
                    quantity : updatedData.quantity,
                    category : updatedData.category,
                    brand : updatedData.brand,
                    image : updatedData.image,
                    id: updatedData.id
                }
                let index = productList.findIndex(product => product.id === updatedData.id)
                productList[index]=data
                break;
        default:
            break;
    }
    console.log("final",productList)
    return productList
    

}

export default productListReducer;