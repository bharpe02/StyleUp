package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.Recommendation;
import com.StyleUp.backend.services.SurveyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/survey")
public class SurveyController {

    private final SurveyService surveyService;

    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @PostMapping
    public ResponseEntity<List<Recommendation>> submitSurvey(@RequestBody Map<String, Object> surveyResponses) {
        try {
            // Process survey responses and get recommendations
            List<Recommendation> recommendations = surveyService.processSurvey(surveyResponses);
            return ResponseEntity.ok(recommendations);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}