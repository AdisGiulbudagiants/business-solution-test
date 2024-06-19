import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setLanguage } from "../store/reviewsSlice"
import Watch from "./Watch"
import Logo from "../assets/logo.png"

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.reviews.language)

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setLanguage(event.target.value as "ru" | "en"))
  }

  return (
    <header className="p-2 w-[70%] mx-auto flex justify-between border-x border-b items-center rounded-lg">
      <img className="size-20" src={Logo} alt="png" />
      <Watch />
      <select
        className="outline-none"
        value={language}
        onChange={handleLanguageChange}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </header>
  )
}

export default Header
