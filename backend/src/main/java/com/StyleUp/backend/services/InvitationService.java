package com.StyleUp.backend.services;

import com.StyleUp.backend.models.Invitation;
import com.StyleUp.backend.models.Room;
import com.StyleUp.backend.models.User;
import com.StyleUp.backend.repositories.InvitationRepository;
import com.StyleUp.backend.repositories.RoomRepository;
import com.StyleUp.backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class InvitationService {
    private final InvitationRepository invitationRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    public InvitationService(InvitationRepository invRepo, UserRepository userRepository, RoomRepository roomRepository) {
        this.invitationRepository = invRepo;
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
    }

    public Invitation addInvitation(String email, Long roomId, Long ownerId, String roomName){
        System.out.println("In addInvitation!!");
        Invitation invite = new Invitation(ownerId, email, roomId, roomName);
        System.out.println("FULL Invitation: " + invite);
        return invitationRepository.save(invite);
    }

    public void removeInvite(Long inviteId){
        if (invitationRepository.existsById(inviteId)) {
            // Delete the invitation by ID
            invitationRepository.deleteById(inviteId);
        } else {
            // Handle the case where the invite does not exist (optional)
            throw new RuntimeException("Invite not found with id: " + inviteId);
        }
    }

    public void acceptInvite(Long inviteId){
        if (invitationRepository.existsById(inviteId)) {
            Invitation invite = invitationRepository.findById(inviteId).get();
            User user = userRepository.findByEmail(invite.getEmail());
            if(roomRepository.existsById(invite.getRoom_id())) {
                Room shared = roomRepository.findById(invite.getRoom_id()).get();
                Set collabRooms = user.getCollabRooms();
                collabRooms.add(shared);
            } else {
                throw new RuntimeException("Invite not found with id: " + invite.getRoom_id());
            }
            invitationRepository.deleteById(inviteId);
        } else {
            // Handle the case where the invite does not exist (optional)
            throw new RuntimeException("Invite not found with id: " + inviteId);
        }
    }
}
