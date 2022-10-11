import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS
} from "./../action";
export const initialState = {
  all_products: [],
  filter_products: [],
  sort: "price",
};
const Filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
      
        filter_products: [...action.payload]
      };

    case UPDATE_SORT:
      console.log("hello from update hhhhhh",action.payload)
      return {
        ...state,
        sort: action.payload
      };
      // case SORT_PRODUCTS:
      //   console.log("short th products",state.sort)
      //   return{
      //     ...state
      //   }
    case SORT_PRODUCTS:
     const { sort, filter_products } = state;
      console.log("from filter reducrrer",sort)
     let tempProducts = [...filter_products];
      if (sort=== "price-lowest") {
       tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        console.log("lol>>>>>>>>>>>>..indsie")

      }
      if (sort === "price-highest") {
      console.log( "hey price highest" ,tempProducts?.sort((a, b) => b.price - a.price));
      console.log("lol>>>>>>>>>>>>..indsie")


      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
         return a.name.localeCompare(b.name);
        });
      

      }
      if (sort === "name-z") {
        tempProducts = tempProducts?.sort((a, b) => {
         return b.name.localeCompare(a.name);
         });
        console.log("lol>>>>>>>>>>>>..indsie")

      }

      return {
        ...state,
        filter_products: tempProducts
      };
  

    default:
      return state;
  }
}
  // throw new Error(`No Matching "${action.type}" - action type`)


export default Filter_reducer;
