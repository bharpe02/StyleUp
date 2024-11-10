package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Decoration;
import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.UserPrincipal;
import com.StyleUp.backend.repositories.RoomRepository;
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

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
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
        Room room = new Room(URLDecoder.decode(roomName, StandardCharsets.UTF_8), userId, decorations);
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

    //implement share method: need shared room and invitation classes too

    //implement remove collaborator method?
    //is this a completely separate controller, class, table, etc?? many-many relation
}
