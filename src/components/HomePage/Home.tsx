import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "../Post/Post";

export default function Home() {
  const navigate = useNavigate();

  const navigateToMytasksPage = (): void => {
    navigate("/Mytasks");
  };

  return (
    <div className="flex justify-between items-start p-10">
      <div className="sticky w-[300px] h-[800px] bg-white drop-shadow-md rounded-md"></div>
      <div className="w-[600px] space-y-4">
        <div className="w-full flex justify-start items-center bg-white drop-shadow-md rounded-md p-3">
          <img
            src="j.jpg"
            alt="profile"
            className="w-[40px] h-[40px] border-[1px] rounded-full bg-gray-400"
          />
          <p className="ml-3 mr-[150px]">You want to share your task ?</p>
          <button
            className="w-[150px] h-[29px] text-sm text-white font-medium bg-blue-500 rounded"
            onClick={navigateToMytasksPage}
          >
            Go to tasks
          </button>
        </div>
        <p className="text-gray-600 font-medium">SHARE</p>
        <div>
          <Post />
        </div>
      </div>
      <div className="sticky w-[300px] h-[800px] bg-white drop-shadow-md rounded-md"></div>
    </div>
  );
}
