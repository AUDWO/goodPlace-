import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const Users = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://img.sbs.co.kr/newimg/news/20230222/201754319_1280.jpg",
      places: 5,
    },
  ];

  return <UserList items={Users} />;
};

export default Users;
