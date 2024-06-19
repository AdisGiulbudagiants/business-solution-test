import React from "react"

interface PaginationProps {
  totalReviews: number
  reviewsPerPage: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

export default class Pagination extends React.Component<PaginationProps> {
  render() {
    const { totalReviews, reviewsPerPage, paginate, currentPage } = this.props
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalReviews / reviewsPerPage); i++) {
      pageNumbers.push(i)
    }

    return (
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : ""}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
