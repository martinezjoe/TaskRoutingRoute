import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <h1> Welcome to Home Page </h1>
      <h3> Do you want to see your task board? </h3>
      <p> Please click the button below  </p>
      <a style={{
        display:"block",
        padding:'20px 30px',
        backgroundColor: "aliceblue",
        width: '180px',
        margin:'20px auto',
        borderRadius: '15px',
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer'

      }}> <Link to="/register"> My Tasks </Link> </a>
    </div>
  )
}

export default HomePage
