package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Invitation;
import com.StyleUp.backend.repositories.InvitationRepository;
import org.springframework.stereotype.Service;

@Service
public class InvitationService {
    private final InvitationRepository invitationRepository;

    public InvitationService(InvitationRepository invRepo) {
        this.invitationRepository = invRepo;
    }

    public Invitation addInvitation(String email, Long roomId, Long ownerId){
        System.out.println("In addInvitation!!");
        Invitation invite = new Invitation(ownerId, email, roomId);
        System.out.println("FULL Invitation: " + invite);
        return invitationRepository.save(invite);
    }

    public void removeInvite(Long inviteId){
        if (invitationRepository.existsById(inviteId)) {
            // Delete the invitation by ID
            invitationRepository.deleteById(inviteId);
        } else {
            // Handle the case where the user does not exist (optional)
            throw new RuntimeException("Room not found with id: " + inviteId);
        }
    }
}
