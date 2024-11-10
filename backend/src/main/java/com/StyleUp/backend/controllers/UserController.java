package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.UserPrincipal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    //Get user full name
    @GetMapping("/name")
    public ResponseEntity<String> getUserFullName(@AuthenticationPrincipal UserPrincipal user) {
        try {
            // Ensure the user is authenticated and has the necessary information
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
            }
            return ResponseEntity.ok(user.getFname() + " " + user.getLname());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error fetching user details");
        }
    }

    //Get user full name
    @GetMapping("/email")
    public ResponseEntity<String> getUserEmail(@AuthenticationPrincipal UserPrincipal user) {
        try {
            // Ensure the user is authenticated and has the necessary information
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
            }
            System.out.println("USER ID: "+user.toString());
            return ResponseEntity.ok(user.getUsername());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error fetching user details");
        }
    }
}
