import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookItems } from "../context/Book/bookSlice";
import axios from "axios";

const Book = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookItems | undefined>();
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // İlk resmin animasyonu için zamanlayıcı
    const timer = setTimeout(() => {
      setFirstImageLoaded(true);
    }, 100); // 1 saniye sonra ilk resim yüklenecek

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (firstImageLoaded) {
      // İkinci resmin animasyonu için zamanlayıcı
      const timer = setTimeout(() => {
        setSecondImageLoaded(true);
      }, 600); // İlk resmin animasyonu bittikten 1 saniye sonra ikinci resim yüklenecek

      return () => clearTimeout(timer);
    }
  }, [firstImageLoaded]);

  useEffect(() => {
    axios
      .get<BookItems>(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        if (res.data) {
          setBook(res.data || undefined);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-3/4 mt-4">
      {book && (
        <div>
          <div className="grid  items-center gap-4 gap-y-10 grid-cols-1 md:grid-cols-2">
            <div className={`max-w-md justify-self-center `}>
              <h1
                className={`text-3xl ${
                  firstImageLoaded ? "animate-scaleDown" : "opacity-0"
                }`}
              >
                {book.volumeInfo.title}
              </h1>
              <div
                className={` ${
                  secondImageLoaded ? "animate-slideIn" : "opacity-0"
                }`}
              >
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.toString()
                  : "No author entered"}
              </div>
            </div>
            <div className="justify-self-center">
              <img
                className={`h-96 rounded-xl ${
                  firstImageLoaded ? "animate-scaleDown" : "opacity-0"
                }`}
                src={
                  book.volumeInfo.imageLinks?.smallThumbnail ||
                  "https://books.google.com.tr/googlebooks/images/no_cover_thumb.gif"
                }
                alt=""
              />
            </div>
          </div>

          <div
            className="animate-scaleDown"
            dangerouslySetInnerHTML={{
              __html: book.volumeInfo.description || "",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Book;
