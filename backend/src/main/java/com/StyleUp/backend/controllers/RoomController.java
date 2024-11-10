package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.User;
import com.StyleUp.backend.services.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/room/create")
    public ResponseEntity<String> createRoom(@RequestBody String roomName) {
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
}
