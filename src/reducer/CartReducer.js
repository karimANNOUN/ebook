export const CartReducer=(state,action)=>{
    const {type,payload} =action;
    switch (type) {

        case "PRODUCT_LIST":
            return {productList:payload.products}

        case "SORT_BY":
            return {...state, sortBy:payload.sortBy}  // hadi hia products li chra7tha lhih

            case "RATING":
                return {...state, Ratings:payload.Ratings}
 
         case "BEST_SELLER":
             return {...state, bestSellerOnly:payload.bestSellerOnly} // hadi bah nsuprimiw kach cart wela 
 
         case "IN_STOCK":
                 return {...state, INSTOCK:payload.INSTOCK} // hna derna total ti3na bah nzidou les prix kima nhebou 

         case "CLEAR_ALL":
                return {...state ,INSTOCK: false,bestSellerOnly:false,sortBy:null,Ratings:null}
        
         default:
             throw new Error("No case Found in cart Reducer")
             
    }
}