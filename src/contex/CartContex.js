import { createContext, useContext, useReducer } from "react";
import {CartReducer} from "../reducer/CartReducer"
// hadou koulch wch ne7tejou propertie nakhdmou bihm
const initialState={
    productList :[],
    INSTOCK: false,
    bestSellerOnly:false,
    sortBy:null,
    Ratings:null,
    

}
const cartContex = createContext(initialState);
export const CartProvider= ({children})=>{ // hadou ga3dernehm bah n3agbou child ti3na simplement bla manab9aw nfewtou fih chaque mara mn blasa lblasa
    const [state,dispatch]= useReducer(CartReducer,initialState);
      
    const initialProductList= (products)=>{
      
        dispatch({
            type: "PRODUCT_LIST",
            payload:{
                products:products // products adi n7ebou nbedlou  ismha nrm hna w f use reducer mouhim ykoun fi 2 kifkif
            }
        })
       }

       const bestSeller =(products)=>{
        return state.bestSellerOnly ? products.filter((product)=> product.best_seller === true ) : products ;
       }

       const inStock = (products)=>{
        return state.INSTOCK ? products.filter((product)=> product.in_stock === true) : products ;
       }

       const sort =(products)=>{
        if (state.sortBy === "lowtohight") {
            return products.sort((a,b )=> Number(a.Price) - Number(b.Price) )
        }
        if (state.sortBy === "highttolow") {
            return products.sort((a,b )=> Number(b.Price) - Number(a.Price) )
        }
        return products
       }

       const rating = (products)=>{
          if (state.Ratings === "4STARSABOVE") {
            return products.filter((product)=> product.Rating >= 4 )
          }
          if (state.Ratings === "3STARSABOVE") {
            return products.filter((product)=> product.Rating >= 3 )
          }
          if (state.Ratings === "2STARSABOVE") {
            return products.filter((product)=> product.Rating >= 2 )
          }
          if (state.Ratings === "1STARSABOVE") {
            return products.filter((product)=> product.Rating >= 1 )
          }
          return products
       }

       const filterProductList = rating(sort(inStock(bestSeller(state.productList))))

    

      
    

      

    const value={
        state,
        dispatch,
        products:filterProductList,
        initialProductList,
       
        
    }
    return (
        <cartContex.Provider value={value} >
            {children}
        </cartContex.Provider>
    )}

    export const useFilter = ()=>{
        const context = useContext(cartContex)
        return context
    }
