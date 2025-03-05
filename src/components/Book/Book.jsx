import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, category } = book;

  return (
    <div className="border border-gray-200 p-6 rounded-2xl">
      <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center py-8">
        <img className="h-[166px] w-[120px]" src={image} alt={bookName} />
      </div>
      <div></div>
      <div>
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p className="font-medium text-[#131313CC]">By: {author}</p>
      </div>
      <div className="border border-dashed border-gray-200 my-5"></div>
      <div>
        <p className="font-medium text-[#131313CC]">{category}</p>
      </div>
    </div>
  );
};

export default Book;
