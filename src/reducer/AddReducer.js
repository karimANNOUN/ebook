export const AddReducer=(state,action)=>{
    const {type,payload} =action;

    switch (type) {
        case "ADD_TO_CART":
           return {...state, CardList:payload.products}  // hadi hia products li chra7tha lhih

        case "REMOVE_FROM_CART":
            return {...state, CardList:payload.products} // hadi bah nsuprimiw kach cart wela 

        case "UPDATE_TOTAL":
                return {...state, total:payload.total} // hna derna total ti3na bah nzidou les prix kima nhebou 

        case "CLEAR_CART":
                return {...state, total:0 , CardList:[] }

        default:
            throw new Error("No case Found in cart Reducer")
            
    }
}