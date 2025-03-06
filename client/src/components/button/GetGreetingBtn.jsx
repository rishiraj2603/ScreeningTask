import axios from "axios";
import React, { useState } from "react";

const GetGreetingBtn = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  console.log("🚀 ~ GetGreetingBtn ~ error:", error);
  const [greeting, setGreeting] = useState("");
  console.log("🚀 ~ GetGreetingBtn ~ greeting:", greeting);

  async function handleGetGreeting() {
    try {
      setError(false);
      setGreeting("");

      const res = await axios.get(
        `http://localhost:4000/api/greet?name=${name}`
      );
      const data = res.data;
      setGreeting(data.message);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "An error occurred.");
      } else {
        setError(err.message);
      }
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Greeting App
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGetGreeting}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Get Greeting
        </button>
        {greeting ? (
          <p className="mt-4 text-center text-gray-700 font-semibold">
            {greeting}
          </p>
        ) : (
          <p className="mt-4 text-center text-gray-700 font-semibold">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default GetGreetingBtn;
