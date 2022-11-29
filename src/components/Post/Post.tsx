import React, { useState } from "react";
import {
  FaCommentAlt,
  FaHeart,
  FaRegCommentAlt,
  FaRegHeart,
} from "react-icons/fa";
import Todo from "../Todo/Todo";

export default function Post() {
  const [isLike, setIsLike] = useState<boolean>(true);
  const [isShowComment, setIsShowComment] = useState<boolean>(true);
  return (
    <div className="bg-white drop-shadow-md rounded-md space-y-2 py-3">
      <div className="flex justify-start items-start px-3">
        <img
          src="j.jpg"
          alt="profile"
          className="w-[45px] h-[45px] border-[1px] rounded-full bg-gray-400"
        />
        <div className="ml-[7px]">
          <p className="font-bold">Arnicha Michai</p>
          <p className="text-[12px] font-light">:)</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between bg-[#A9D6A2] pt-[5px] px-[15px] pb-[5px]">
        <p className="text-[18px] break-words font-bold mb-[5px]">Monday</p>
        <div className="min-h-[30px]">
          <p className="break-words">
            A word that refers to a lung disease contracted :)
          </p>
        </div>
        <div className="flex justify-end">
          <span className="text-[15px] mr-2">Due date</span>
          <span className="text-[15px] font-bold">28 Nov 2021</span>
        </div>
      </div>
      <div className="py-[6px] pl-[40px] pr-[20px]">
        <p className="font-bold">Todolist</p>
        <div className="px-6">
          <div className="min-h-[50px] max-h-[400px] overflow-y-auto pr-3">
            <Todo textToda="go shoping" />
            <Todo textToda="do yoka" />
            <Todo textToda="go jogging" />
            <Todo textToda="take a shower" />
            <Todo textToda="read a book" />
            <Todo textToda="coding" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-3">
        <div className="flex">
          <div className="flex justify-start items-center pr-2">
            {isLike ? (
              <FaHeart className="text-[19px] text-red-500 cursor-pointer" onClick={() => setIsLike(!isLike)}/>
            ) : (
              <FaRegHeart className="text-[19px] cursor-pointer" onClick={() => setIsLike(!isLike)}/>
            )}
            <p className="ml-1">5</p>
          </div>
          <div
            className="flex justify-start items-center pl-2"
          >
            {isShowComment ? (
              <FaCommentAlt className="text-[19px] cursor-pointer" onClick={() => setIsShowComment(!isShowComment)}/>
            ) : (
              <FaRegCommentAlt className="text-[19px] cursor-pointer" onClick={() => setIsShowComment(!isShowComment)}/>
            )}
            <p className="ml-2">3 Comment</p>
          </div>
        </div>
        <p className="text-[14px]">28 Nov 2021</p>
      </div>
      {isShowComment && (
        <div className="border-t-[1px] px-3 pt-3">
          <div className="max-h-[500px] overflow-y-auto space-y-1">
            <div className="flex items-start justify-start">
              <img
                src="j.jpg"
                alt="profile"
                className="w-[40px] h-[40px] border-[1px] rounded-full bg-gray-400"
              />
              <div className="ml-[7px]">
                <p className="font-bold">Stopjib</p>
                <div className="flex justify-start">
                  <p className="w-[400px] text-[14px] break-words">
                    Wow so productive !!!
                  </p>
                  <div className="w-[120px] flex justify-end items-end">
                    <div className="flex justify-start items-center">
                      {isLike ? (
                        <FaHeart className="text-[15px] text-red-500 cursor-pointer" />
                      ) : (
                        <FaRegHeart className="text-[15px] cursor-pointer" />
                      )}
                      <p className="text-[14px] ml-1">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center pt-3">
            <img
              src="j.jpg"
              alt="profile"
              className="w-[40px] h-[40px] border-[1px] rounded-full bg-gray-400"
            />
            <div className="w-[530px] h-[32px] flex items-center border-[1px] border-blue-200 rounded-md bg-blue-50 p-3 ml-2">
              <input
                type="text"
                className="w-full text-[14px] outline-none bg-blue-50 pr-2"
                placeholder="Write a comment"
              />
              <p className="text-[14px] font-bold">Post</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
