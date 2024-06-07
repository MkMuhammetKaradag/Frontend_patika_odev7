import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Book from "./pages/Book";

const App = () => {
  return (
    <div className="flex  flex-col gap-5 min-h-screen">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>

          <Route path="/book/:id" element={<Book></Book>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
