package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.User;
import com.StyleUp.backend.services.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createRoom(@RequestBody Room room) {
        String roomName = room.getRoomName();
        System.out.println("RECEIVED CREATE REQUEST FOR ROOM: "+roomName);
        try {
            roomService.addRoom(roomName);
            return ResponseEntity.ok("Room Created successfully");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Creation failed: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> remRoom(@RequestBody Room room) {
        Long roomId=room.getRoom_id();
        System.out.println("RECEIVED REMOVE REQUEST FOR ROOM: "+roomId);
        try {
            roomService.removeRoom(roomId);
            return ResponseEntity.ok("Room deleted successfully");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Delete failed: " + e.getMessage());
        }
    }

}
