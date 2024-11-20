package com.StyleUp.backend.services;

import com.StyleUp.backend.models.WishlistItem;
import com.StyleUp.backend.repositories.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;

    public WishlistService(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    public List<WishlistItem> getWishlistByUserId(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }

    public void addWishlistItem(WishlistItem wishlistItem) {
        wishlistRepository.save(wishlistItem);
    }

    public void removeWishlistItem(Long wishlistId) {
        wishlistRepository.deleteById(wishlistId);
    }
}