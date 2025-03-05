import React from "react";
import starIcon from "../../assets/star.png";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, category, tags, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="border border-gray-200 p-6 rounded-2xl">
        <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center py-8">
          <img className="h-[166px] w-[120px]" src={image} alt={bookName} />
        </div>
        <div className="flex gap-3 my-6">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#23BE0A0D] py-2 px-4 rounded-4xl text-[#23BE0A]"
            >
              {tag}
            </button>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{bookName}</h1>
          <p className="font-medium text-[#131313CC]">By: {author}</p>
        </div>
        <div className="border border-dashed border-gray-200 my-5"></div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[#131313CC]">{category}</p>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <img className="w-[18px]" src={starIcon} alt="Star Icon" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
