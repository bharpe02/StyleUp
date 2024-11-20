package com.StyleUp.backend.repositories;
import com.StyleUp.backend.models.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {
    Invitation findByEmail(String email);
    Invitation findByOwnerId(Long userId);
}