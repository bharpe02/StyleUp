package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.User;
import com.StyleUp.backend.services.AuthService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthService authService;

    @Autowired
    private ObjectMapper objectMapper; // for JSON serialization

    // Test for register endpoint
    @Test
    public void registerUser_Success() throws Exception {
        // Arrange: Mock the service to do nothing on register
        //Mockito.doNothing().when(authService).registerUser(any(), any(), any(), any());
        ArrayList<Room> rooms = new ArrayList<>();
        // Create a user object to be sent in the request
        User user = new User("John", "Doe", "john.doe@example.com", "password123", rooms);

        // Act & Assert: Perform the request and check the response
        mockMvc.perform(post("/api/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(content().string("User registered successfully"));
    }

    @Test
    public void registerUser_Failure() throws Exception {
        // Arrange: Mock the service to throw an exception on register
        Mockito.doThrow(new RuntimeException("Registration error")).when(authService)
                .registerUser(any(), any(), any(), any());

        ArrayList<Room> rooms = new ArrayList<>();
        // Create a user object to be sent in the request
        User user = new User("John", "Doe", "john.doe@example.com", "password123", rooms);

        // Act & Assert: Perform the request and check the response
        mockMvc.perform(post("/api/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isInternalServerError())
                .andExpect(content().string("Registration failed: Registration error"));
    }

    // Test for login endpoint - successful login
    @Test
    public void loginUser_Success() throws Exception {
        // Arrange: Mock the service to return a success message
        when(authService.verifyUser(any())).thenReturn("Login successful");

        ArrayList<Room> rooms = new ArrayList<>();
        // Create a user object to be sent in the request
        User user = new User("John", "Doe", "john.doe@example.com", "password123", rooms);

        // Act & Assert: Perform the request and check the response
        mockMvc.perform(post("/api/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(content().string("Login successful"));
    }

    // Test for login endpoint - unsuccessful login
    @Test
    public void loginUser_Failure() throws Exception {
        // Arrange: Mock the service to throw an exception on login
        when(authService.verifyUser(any())).thenThrow(new RuntimeException("Invalid credentials"));

        ArrayList<Room> rooms = new ArrayList<>();
        // Create a user object to be sent in the request
        User user = new User("John", "Doe", "john.doe@example.com", "password123", rooms);

        // Act & Assert: Perform the request and check the response
        mockMvc.perform(post("/api/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isUnauthorized())
                .andExpect(content().string("Invalid credentials"));
    }
}
