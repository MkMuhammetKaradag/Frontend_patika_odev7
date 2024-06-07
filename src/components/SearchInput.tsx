import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch } from "../context/hooks";
import axios from "axios";
import { responseTypeBook } from "../context/ReduxProvider";
import { addItems } from "../context/Book/bookSlice";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const dispatch = useAppDispatch();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get<responseTypeBook>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=20`
      )
      .then((res) => {
        if (res.data) {
          dispatch(
            addItems({
              items: res.data.items || [],
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setSearchTerm("");
  };
  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
      <div className="rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2  rounded-l-md  "
          placeholder="Search..."
        />

        <button type="submit" className=" px-4 py-2">
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
