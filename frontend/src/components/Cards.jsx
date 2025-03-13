import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full bg-base-100 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border dark:hover:border-pink-500">
        <figure className="overflow-hidden rounded-xl">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-64 transition-transform duration-300 transform hover:scale-110"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-2xl font-semibold text-gray-800 dark:text-white flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary text-white">{item.category}</div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-lg text-gray-800 dark:text-white">${item.price}</div>
            <div className="cursor-pointer px-4 py-2 rounded-full bg-pink-500 text-white border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition-all duration-300 ease-in-out">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
