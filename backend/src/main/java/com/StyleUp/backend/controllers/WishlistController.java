package com.StyleUp.backend.controllers;

import com.StyleUp.backend.models.WishlistItem;
import com.StyleUp.backend.services.WishlistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<WishlistItem>> getWishlist(@PathVariable Long userId) {
        try {
            List<WishlistItem> wishlist = wishlistService.getWishlistByUserId(userId);
            return ResponseEntity.ok(wishlist);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addWishlistItem(@RequestBody WishlistItem wishlistItem) {
        try {
            wishlistService.addWishlistItem(wishlistItem);
            return ResponseEntity.ok("Item added to wishlist successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to add item to wishlist: " + e.getMessage());
        }
    }

    @DeleteMapping("/remove/{wishlistId}")
    public ResponseEntity<String> removeWishlistItem(@PathVariable Long wishlistId) {
        try {
            wishlistService.removeWishlistItem(wishlistId);
            return ResponseEntity.ok("Item removed from wishlist successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to remove item from wishlist: " + e.getMessage());
        }
    }
}