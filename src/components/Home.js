import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import useOtherUsers from "../hooks/useOtherUsers";
import useGetMyTweets from "../hooks/useGetMyTweets";

export const Home = () => {
  const { user, otherUsers } = useSelector(store => store.user);
  
  // Custom Hook
  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <div>
      <div className="flex justify-between w-[80%] mx-auto">
        <LeftSidebar />
        <Outlet />
        <RightSidebar otherUsers={otherUsers} />
      </div>
    </div>
  );
};
