package com.StyleUp.backend.services;

import com.StyleUp.backend.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.StyleUp.backend.models.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register a new user
    public User registerUser(String fname, String lname, String email, String password) {
        //Check if user already exists
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("User already exists with this email");
        }
        User user = new User(fname, lname, email, password);
        return userRepository.save(user);
    }

    // Authenticate user
    public Optional<User> loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(password, user.getPassword())) {
            return Optional.of(user);
        } else {
            throw new RuntimeException("Invalid password");
        }
    }
}