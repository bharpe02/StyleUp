package com.StyleUp.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.StyleUp.backend.models.WishlistItem;
import java.util.*;

public interface WishlistRepository extends JpaRepository<WishlistItem, Long> {
    List<WishlistItem> findByUserId(Long userId);
}
