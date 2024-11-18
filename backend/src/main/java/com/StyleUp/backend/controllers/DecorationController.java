package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.Decoration;
import com.StyleUp.backend.repositories.DecorationRepository;
import com.StyleUp.backend.services.DecorationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/decoration")
public class DecorationController {

    private final DecorationService decoService;
    private final DecorationRepository decoRepository;

    public DecorationController(DecorationService decoService, DecorationRepository decoRepository) {
        this.decoService = decoService;
        this.decoRepository = decoRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createDecoration(@RequestBody Decoration decoration) {
        String link= decoration.getSearchLink();
        Long roomId=decoration.getFkr();
        System.out.println("RECEIVED CREATE REQUEST FOR Decoration: " + link);
        try {
            decoService.addDecoration(link, roomId);
            return ResponseEntity.ok("Decoration Created successfully");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Creation failed: " + e.getMessage());
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<String> remDecoration(@RequestBody Decoration decoration) {
        System.out.println("RECEIVED REMOVE REQUEST FOR DECORATION: " + decoration.getDec_id());
        try {
            decoService.removeDecoration(decoration.getDec_id());
            return ResponseEntity.ok("Decoration deleted successfully");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Delete failed: " + e.getMessage());
        }
    }
}