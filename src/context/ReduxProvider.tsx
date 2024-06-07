import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer, {  BookItems } from "./Book/bookSlice";
import axios from "axios";

interface ReduxProviderProps {
  children: React.ReactElement<any>;
}
export interface responseTypeBook {
  items: BookItems[];
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [booksItems, setBookItems] = useState<BookItems[]>([]);

  useEffect(() => {}, []);

  const reducer = {
    app: appReducer,
  };
  useEffect(() => {
    axios
      .get<responseTypeBook>(
        "https://www.googleapis.com/books/v1/volumes?q=react&startIndex=0&maxResults=20"
      )
      .then((res) => {
        if (res.data) {
          setBookItems(res.data.items || []);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const store = configureStore({
    reducer,
    preloadedState: {
      app: {
        items: booksItems,
        likeList: [],
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
