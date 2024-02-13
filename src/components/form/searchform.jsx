import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../../css/main.css';
import "react-datepicker/dist/react-datepicker.css";
 // Assuming the CSS file is in the same directory

function SearchForm() {
    const [keyword, setKeyword] = useState('');
    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [duration, setDuration] = useState(0);
    const [endDate, setEndDate] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Implement form validation here
        const validationErrors = {};
        // ...validation logic
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          // Submit form data here
          console.log('Form submitted:', {
            keyword,
            category1,
            category2,
            minPrice,
            maxPrice,
            selectedDate,
            duration,
            endDate,
          });
        }
      };
    
      const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        setMaxPrice(''); // Reset max price when min price changes
      };
    
      const handleDurationChange = (event) => {
        setDuration(parseInt(event.target.value));
        setSelectedDate(null); // Reset selected date when duration changes
      };
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
        if (duration > 0) {
          const endDate = new Date(date.getTime() + duration * 24 * 60 * 60 * 1000);
          setEndDate(endDate);
        }
      };
    
      // Function to highlight selected days
      const getDayStyle = (date) => {
        if (selectedDate && endDate && date >= selectedDate && date <= endDate) {
          return {
            backgroundColor: '#00ff00', // Green background for selected range
          };
        }
        return {};
      };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      {Object.keys(errors).length > 0 && (
        <div className="error-message">
          <span className="icon">❌</span> Please fix the following errors:
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div class="form-items">
      <div className="form-group">
        <label htmlFor="keyword">Keyword</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
      <label htmlFor="category1">Category</label>
        <select id="category1" value={category1} onChange={(e) => setCategory1(e.target.value)}>
          {/* Option elements for category 1 */}
        </select>
        <select id="category2" value={category2} onChange={(e) => setCategory2(e.target.value)}>
          {/* Option elements for category 1 */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="minPrice">Min Price</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
          required
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="duration">Duration (days):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
          min={0} // Ensure positive integer values
          required
        />
      </div>

      <div className="form-group date-picker">
        <label htmlFor="selectedDate">Date</label>
        <DatePicker
          placeholderText='mm / dd / yyyy  '
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          required
          className="date-input" // Custom class for styling
        />
      </div>

      <div className="form-group">
        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          min={minPrice}
          required
        />
      </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
