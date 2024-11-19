package com.StyleUp.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "wishlist")
public class WishlistItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlistId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "search_link", nullable = false)
    private String searchLink;

    public Long getWishlistId() {
        return wishlistId;
    }

    public void setWishlistId(Long wishlistId) {
        this.wishlistId = wishlistId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getSearchLink() {
        return searchLink;
    }

    public void setSearchLink(String searchLink) {
        this.searchLink = searchLink;
    }
}
