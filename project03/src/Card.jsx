import React from "react";

function Card({user}) {
    return(
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 m-5">
        <img
          className="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card Image"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{user.userName}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover the beauty of nature with stunning landscapes and breathtaking views.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            {user.email}
          </button>
        </div>
      </div>
    );
  };
  
  export default Card