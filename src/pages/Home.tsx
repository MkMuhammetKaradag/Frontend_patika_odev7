import { Link } from "react-router-dom";
import { useAppSelector } from "../context/hooks";

const Home = () => {
  const items = useAppSelector((s) => s.app.items);
  return (
    <div className="flex max-w-6xl mt-3">
      <div className="grid grid-cols-4 gap-4">
        {items.map((book) => (
          <div
            key={book.id}
            className="w-52 bg-gray-50  justify-between border-2 shadow-md flex  flex-col items-center p-3 rounded-xl"
          >
            <div>
              <img
                className=" object-fill w-36 h-40  rounded-t-xl"
                src={
                  book.volumeInfo.imageLinks?.smallThumbnail ||
                  "https://books.google.com.tr/googlebooks/images/no_cover_thumb.gif"
                }
                alt=""
              />
            </div>
            <hr className="border-t border-1 w-full border-gray-300  mt-1 h-2" />

            <span className="w-36 text-gray-600">
              {book.volumeInfo.title.length > 30
                ? book.volumeInfo.title.slice(0, 30) + "..."
                : book.volumeInfo.title}
            </span>
            <hr className="border-t border-1 w-full border-gray-300  mt-1 h-2" />

            <span className="w-36 text-gray-600">
              {book.volumeInfo.publishedDate}
              ...
            </span>
            <hr className="border-t border-1 w-full border-gray-300  mt-1 h-2" />
            <div className="mt-2 w-36 flex justify-between">
              <a
                href={book.volumeInfo.previewLink}
                className="text-sm group text-gray-600"
              >
                PREVİEW
                <span className="block h-0.5 bg-transparent  group-hover:bg-gray-600 transition-all duration-500"></span>
              </a>
              <Link
                className="text-sm group text-gray-600"
                to={`/book/${book.id}`}
              >
                DETAILS
                <span className="block h-0.5 bg-transparent group-hover:bg-current transition-all duration-500"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
