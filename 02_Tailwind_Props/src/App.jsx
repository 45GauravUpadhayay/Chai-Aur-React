import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          className="w-full h-60 object-cover"
          src="https://plus.unsplash.com/premium_photo-1783869514787-576c95a19573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          alt="Profile"
        />

        <div className="p-5">
          <h3 className="text-2xl font-bold mb-3">Delba</h3>

          <p className="text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem dolor perferendis nemo. Animi atque, cumque
            quibusdam aliquid id minus officia.
          </p>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all cursor-pointer hover:scale-105">
            View Profile
          </button>
        </div>

      </div>

    </div>
  );
};

export default App;