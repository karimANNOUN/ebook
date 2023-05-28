
import { useFilter } from "../../../contex"

export const FilterBar = ({setShow}) => {
  const {state,dispatch}=useFilter();
  return (
    <div>

<div id="drawer-disable-body-scrolling" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transhtmlForm -translate-none bg-white w-80 dark:bg-gray-800`} tabIndex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
    <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">FILTERS</h5>
    <button onClick={()=>setShow(false)} type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
       <ul><h1 className="text-md font-semibold dark:text-gray-300">Sort by</h1>
        <li>
        <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"SORT_BY",payload:{ sortBy:"lowtohight" }}) } checked={state.sortBy === "lowtohight" || false }  id="sort" type="radio" value="" name="price-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="sort" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Price-Low to Hight</label>
        </div>
        </li>
        <li>
        <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"SORT_BY",payload:{ sortBy:"highttolow" }}) } checked={state.sortBy === "highttolow" || false }  id="sort-by" type="radio" value="" name="price-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="sort-by" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Price-Hight to Low</label>
    </div>
        </li>
       </ul>

       <ul><h1 className="text-md font-semibold dark:text-gray-300">Rating</h1>
       <li>
       <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"RATING",payload:{ Ratings:"4STARSABOVE" }}) } checked={state.Ratings === "4STARSABOVE" || false }  id="purple-" type="radio" value="" name="rating-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="purple-" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">4 Stars & above</label>
    </div>
       </li>
       <li>
       <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"RATING",payload:{ Ratings: "3STARSABOVE"}}) } checked={state.Ratings === "3STARSABOVE" || false }   id="purple-radio" type="radio" value="" name="rating-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="purple-radio" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">3 Stars & above</label>
    </div>
       </li>
       <li>
       <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"RATING",payload:{ Ratings:"2STARSABOVE" }}) } checked={state.Ratings === "2STARSABOVE" || false}   id="purple" type="radio" value="" name="rating-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="purple" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">2 Stars & above</label>
    </div>
       </li>
       <li>
       <div className="flex items-center mr-4">
        <input onChange={()=>dispatch({type:"RATING",payload:{ Ratings: "1STARSABOVE"}}) } checked={state.Ratings === "1STARSABOVE" || false }   id="radio" type="radio" value="" name="rating-sort" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="radio" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">1 Stars & above</label>
    </div>
       </li>
       </ul>


       <ul><h1 className="text-md font-semibold dark:text-gray-300">Other Filters</h1>
         <li>
         <div className="flex items-center mr-4">
         <input onChange={()=>dispatch({type:"BEST_SELLER",payload:{ bestSellerOnly: !state.bestSellerOnly}}) } checked={state.bestSellerOnly || false} id="best" type="checkbox" name="best-seller" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="best" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Best Seller Only</label>
    </div>
         </li>
         <li>
         <div className="flex items-center mr-4">
         <input onChange={()=>dispatch({type:"IN_STOCK",payload:{ INSTOCK: !state.INSTOCK}}) } checked={state.INSTOCK || false} id="seller" type="checkbox" value="" name="best-seller" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="seller" className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300">INSTOCK Only</label>
    </div>
         </li>
       </ul>

      </ul>
      <button onClick={()=>dispatch({type:"CLEAR_ALL"})} className="mt-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear Filters</button>
   </div>
</div>

    </div>
  )
}
