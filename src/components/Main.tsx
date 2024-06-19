import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { setCurrentPage } from "../store/reviewsSlice"
import { formatName } from "../utils"

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const { reviews, currentPage, reviewsPerPage } = useSelector(
    (state: RootState) => state.reviews
  )

  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview)

  const handleClick = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber))
  }

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <main className="w-[80%] mx-auto p-5">
      {/**Отзывы */}
      <ul className="list-image-none">
        {currentReviews.map((review, index) => (
          <li className="border mb-2 rounded-lg p-3" key={index}>
            <h1 className="text-2xl font-bold">{formatName(review.name)}</h1>
            <p className="text-lg mb-4">{review.review}</p>
            <p>{review.date}</p>
          </li>
        ))}
      </ul>
      {/**Пагинация */}
      <div className="flex">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className="size-12 border flex items-center justify-center mr-2 hover:bg-white active:bg-opacity-5">
            {number}
          </button>
        ))}
      </div>
    </main>
  )
}

export default Main
