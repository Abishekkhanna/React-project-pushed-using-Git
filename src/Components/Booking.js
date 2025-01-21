import React, { useState } from "react";
import "../Style/booking.css";

const Booking = () => {
  return (
    <div className="booking-container">
      <h2>Book Your Table</h2>
      <form>
        <label>
          Dining Preference:
          <select>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </label>

        <label>
          Number of People:
          <input
            type="number"
            name="numPeople"
            defaultValue={1}
            min="1"
            max="20"/>
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"/>
        </label>

        <button type="submit" className="bokbut">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
