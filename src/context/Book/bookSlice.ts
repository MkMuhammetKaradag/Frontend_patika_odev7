import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Book {
  title: string;
  authors?: string[];
  publishedDate: string;
  language: string;
  description?: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  previewLink: string;
}
export interface BookItems {
  id: string;
  volumeInfo: Book;
}
interface BookAppState {
  items: Array<BookItems>;
  likeList: Array<Book[]>;
}

const initialState: BookAppState = {
  items: [],
  likeList: [],
};

const BookAppSlice = createSlice({
  name: "BookApp",
  initialState,
  reducers: {
    addItems: (state, actions: PayloadAction<{ items: Array<BookItems> }>) => {
      state.items = actions.payload.items;
    },
  },
});

export const { addItems } = BookAppSlice.actions;
export default BookAppSlice.reducer;
