import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    author,
    bookName,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  return (
    <div className="m-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center">
        <img className="w-[360px] h-[540px]" src={image} alt={bookName} />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-[20px] text-[#131313CC]">By: {author}</p>
        <hr className="text-gray-200 my-4" />
        <p className="text-[20px] text-[#131313CC]">{category}</p>
        <hr className="text-gray-200 my-4" />
        <p className="font-bold">
          Review: <span className="text-[#131313B3] font-normal">{review}</span>
        </p>
        <div className="mt-7 flex items-center gap-2">
          <p className="font-bold">Tags:</p>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#23BE0A0D] py-2 px-4 rounded-4xl text-[#23BE0A]"
            >
              {tag}
            </button>
          ))}
        </div>
        <hr className="text-gray-200 my-4" />
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[#131313B3]">Number of Pages:</p>
            <p className="text-[#131313B3]">Publisher:</p>
            <p className="text-[#131313B3]">Year of Publishing:</p>
            <p className="text-[#131313B3]">Rating:</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">{totalPages}</h1>
            <h1 className="font-semibold">{publisher}</h1>
            <h1 className="font-semibold">{yearOfPublishing}</h1>
            <h1 className="font-semibold">{rating}</h1>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button
            className="px-8 py-4 border border-gray-400 rounded-[8px] font-semibold"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Mark as Read
          </button>
          <button className="bg-[#23BE0A] px-8 py-4 border border-[#23BE0A] rounded-[8px] font-semibold text-white">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
