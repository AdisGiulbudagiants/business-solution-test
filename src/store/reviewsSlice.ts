import { PayloadAction, createSlice  } from "@reduxjs/toolkit"
import { Review, ReviewsState } from "./../types"
import data from "../data.json"

const reviewsArray: Review[] = Object.values(data["ru"])

const initialState: ReviewsState = {
  reviews: reviewsArray,
  language: "ru",
  currentPage: 1,
  reviewsPerPage: 10,
}

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<"ru" | "en">) {
      state.language = action.payload
      state.reviews = Object.values(data[action.payload])
      state.currentPage = 1
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
})

export const { setLanguage, setCurrentPage } = reviewsSlice.actions

export default reviewsSlice.reducer
