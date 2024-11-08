package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Decoration;
import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.repositories.DecorationRepository;
import com.StyleUp.backend.repositories.RoomRepository;
import com.StyleUp.backend.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.StyleUp.backend.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AuthService {
    
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final DecorationRepository decorationRepository;;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository, RoomRepository roomRepository, DecorationRepository decorationRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
        this.decorationRepository = decorationRepository;
    }

    // Register a new user
    public User registerUser(String fname, String lname, String email, String password) {
        //Check if user already exists
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("User already exists with this email");
        }
        List<Room> rooms= new ArrayList<Room>();
        User user = new User(fname, lname, email, password, rooms);
        return userRepository.save(user);
    }

    // Authenticate user
    public Optional<User> loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        //this might be scuffed and need work later
        List<Room> rooms = roomRepository.findByFkUserId(user.getId());
        for (Room room : rooms) {
            List<Decoration> decorations = decorationRepository.findByFkRoomId(room.getRm_id());
            room.setDecorations(decorations);
        }
        user.setRooms(rooms);
        if (passwordEncoder.matches(password, user.getPassword())) {
            return Optional.of(user);
        } else {
            throw new RuntimeException("Invalid password");
        }
    }
}