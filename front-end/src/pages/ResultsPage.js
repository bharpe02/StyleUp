import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the results from state or default to an empty array
  const results = location.state?.results || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Results</h1>

      {/* Display Results */}
      {results.length > 0 ? (
        <ul>
          {results.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h2>{item.name}</h2>
              <a href={item.searchLink} target="_blank" rel="noopener noreferrer">
                View Item
              </a>
              <p>{item.deliveryDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results available. Please submit the survey again.</p>
      )}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/Survey")}>Back to Survey</button>
        <button onClick={() => navigate("/MyRooms")}>Go to My Rooms</button>
      </div>
    </div>
  );
};

export default ResultsPage;
