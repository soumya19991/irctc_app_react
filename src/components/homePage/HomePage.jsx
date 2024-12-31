import React from "react";
import Navbar from "../navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home_page">
        <Navbar />
        <h2>Book Your Train Ticket</h2>
        <form action="">
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <input
              type="text"
              id="from"
              placeholder="Enter your start journy  from station1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input type="text" id="to" placeholder="Enter your destination" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="to" required/>
          </div>
          <div className="form-group">
            <button type="submit">search trains</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePage;
