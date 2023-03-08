import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categories: []
}

const categorySlice = createSlice({
   name: 'categories',
   initialState,
   reducers: {
      setCategories: (state, action) => {
         state.categories = action.payload
      }
   }
})

export const {setCategories} = categorySlice.actions

export const categoriesReducer = categorySlice.reducer

export const selectCategories = (state) => state.categories.categories





// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
// };

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };