package com.StyleUp.controllers;

import com.StyleUp.services.AuthService;
import com.StyleUp.models.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //makes it capable of handling HTTP requests and send responses in JSON format.
@RequestMapping("/api") //the login endpoint will be accessible at /api/login
public class AuthController {

    private final AuthService authService;

    //Constructor injection
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /*
    // Login endpoint
    @PostMapping("/login")
    //@RequestBody maps the JSON request body (from the frontend) to this Java object.
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Authenticate the user using AuthService
        boolean authenticated = authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (authenticated) {
            return ResponseEntity.ok("Login successful"); // HTTP 200 status with success message
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials"); // HTTP 401 for failed login
        }
    }
    */
}