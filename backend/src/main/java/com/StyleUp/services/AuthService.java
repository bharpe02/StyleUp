package com.StyleUp.services;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public boolean authenticate(String email, String password) {
        // Add actual authentication logic here, like checking against a database
        return email.equals("test@example.com") && password.equals("password");
    }
}