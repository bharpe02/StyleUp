package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Recommendation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class SurveyService {

    private final GoogleSearchService googleSearchService;

    public SurveyService(GoogleSearchService googleSearchService) {
        this.googleSearchService = googleSearchService;
    }

    public List<Recommendation> processSurvey(Map<String, Object> surveyResponses) {
        // Log survey responses for debugging
        System.out.println("Processing survey responses: " + surveyResponses);

        List<Recommendation> recommendations = new ArrayList<>();

        // Example: Use survey responses to form search queries
        String stylePreference = (String) surveyResponses.get("Question 1"); // e.g., "Modern"
        String roomType = (String) surveyResponses.get("Question 2");        // e.g., "Living Room"

        // Generate search query
        String searchQuery = stylePreference + " " + roomType + " furniture";

        // Fetch results from Google Custom Search API
        Map<String, Object> searchResults = googleSearchService.search(searchQuery);

        // Parse search results into recommendations
        if (searchResults != null && searchResults.containsKey("items")) {
            List<Map<String, Object>> items = (List<Map<String, Object>>) searchResults.get("items");

            for (Map<String, Object> item : items) {
                String title = (String) item.get("title");
                String link = (String) item.get("link");
                recommendations.add(new Recommendation(title, link, "Delivery Date TBD"));
            }
        }

        return recommendations;
    }
}