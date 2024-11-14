package com.StyleUp.backend.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@Service
public class GoogleSearchService {

    //  GOOGLE_API_KEY AIzaSyCAbvc5y-W2qc8Aa6x0Y6_uke4FqN-kZx8
    @Value("${google.api.key}")
    private String apiKey;

    // GOOGLE_CSE_ID c52d0d0e5d68b4176
    @Value("${google.cse.id}")
    private String cseId;

    private static final String GOOGLE_API_URL = "https://www.googleapis.com/customsearch/v1";

    public Map<String, Object> search(String query) {
        RestTemplate restTemplate = new RestTemplate();

        // Build the URI with query parameters
        String url = UriComponentsBuilder.fromHttpUrl(GOOGLE_API_URL)
                .queryParam("key", apiKey)
                .queryParam("cx", cseId)
                .queryParam("q", query)
                .queryParam("num", 10)  // Number of results
                .toUriString();

        // Make the API call and get the results as a Map
        return restTemplate.getForObject(url, Map.class);
    }
}
