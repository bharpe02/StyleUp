import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResultsPage = ({ query }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize results as null to show loading state initially
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        

        const response = await axios.post(`http://localhost:8080/api/search`, "bedroom%20furniture");
        setResults(response.data); // Save the raw JSON object
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };

    fetchResults();
  }, [query]);

  // Show loading message while results are being fetched
  if (!results) {
    return <div>Loading...</div>;
  }

  // Extract items array from results
  const items = results.items || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Results</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2> {/* Use item.title instead of items.title */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a> {/* Use item.link */}
            <p dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}></p> {/* Use item.htmlSnippet */}
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/Survey")}>Back to Survey</button>
        <button onClick={() => navigate("/MyRooms")}>Go to My Rooms</button>
      </div>
    </div>
  );
};

export default ResultsPage;
