import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type productFilterStateType = {
      category:string,
      minPrice:number,
      maxPrice:number
}

const initialState:productFilterStateType ={
category:'',
minPrice:0,
maxPrice:Infinity,
}

const filterSlice = createSlice({
      name:'filter',
      initialState,
      reducers:{
       categoryFilter(state,action:PayloadAction<string>){
         state.category === action.payload
       },
       minPriceFilter(state,action:PayloadAction<number>){
            state.minPrice === action.payload
       },
       maxPriceFilter(state,action:PayloadAction<number>){
            state.maxPrice === action.payload
       },
      }
})
export const{categoryFilter,minPriceFilter,maxPriceFilter} = filterSlice.actions;
export default filterSlice.reducer;
