package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Decoration;
import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.User;
import com.StyleUp.backend.models.UserPrincipal;
import com.StyleUp.backend.repositories.RoomRepository;
import com.StyleUp.backend.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;

    public RoomService(RoomRepository roomRepository, UserRepository userRepository) {
        this.roomRepository = roomRepository;
        this.userRepository = userRepository;
    }

    public Room addRoom(String roomName){
        System.out.println("In addRoom!!");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long userId;
        if (authentication != null && authentication.getPrincipal() instanceof UserPrincipal) {
            // Cast the principal to UserPrincipal
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            // Access user details (e.g., user ID, username, etc.)
            userId = userPrincipal.getId();
            System.out.println("USER ID: " + userId);
            System.out.println("ROOM NAME: " + roomName);
        } else {
            // Handle case where the authentication or principal is not present
            System.out.println("No user is logged in.");
            return null;
        }

        List<Decoration> decorations = new ArrayList<>();
        Room room = new Room(roomName, userId, decorations);
        System.out.println("FULL ROOM: " + room.toString());
        return roomRepository.save(room);
    }

    public void removeRoom(Long roomId){
        if (roomRepository.existsById(roomId)) {
            // Delete the user by ID
            roomRepository.deleteById(roomId);
        } else {
            // Handle the case where the user does not exist (optional)
            throw new RuntimeException("Room not found with id: " + roomId);
        }
    }
    /**
     * Add a decoration to an existing room.
     *
     * @param decoration decoration to add
     * @param roomId ID of the room which the decoration should be added
     * @return updated room with the new decoration.
     */
    public Room addDecorationToRoom(Decoration decoration, Long roomId) {
        // Find the room by ID
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + roomId));
        // Add the decoration to the room's list of decorations
        room.getDecorations().add(decoration);
        // Save and return the updated room
        return roomRepository.save(room);
    }

    //@TODO: implement remove collaborator/leave room method!!!
    public User removeCollaborator(Long roomId, Long userId) {

    }
    //@TODO: implement get collaborators!!!!!!!!!!!!!!!!!!!!!!!
    public List<User> getCollaborators(Long roomId) {
        List<User> collaborators = new ArrayList<>();

    }
}
