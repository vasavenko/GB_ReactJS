import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to={'/profile'}>Profile</Link>
        </li>
        <li>
          <Link to={'/chats'}>Cats</Link>
        </li>
      </ul>
    </div>
  )
}