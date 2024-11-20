package com.StyleUp.backend.models;

import jakarta.persistence.*;
import org.hibernate.mapping.PrimaryKey;

@Entity
@Table(name="invitations")
public class Invitation {
    @Id
    @Column(name="invitation_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long invitation_id;

    @Column(name="owner_id")
    Long ownerId;

    @Column(name="email")
    String email;

    @Column(name="room_id")
    Long room_id;

    @Column(name="room_name")
    String roomName;

    public Invitation() {}

    public Invitation(Long owner_id, String email, Long room_id) {
        this.ownerId = owner_id;
        this.email = email;
        this.room_id = room_id;
    }

    public Long getInvitation_id() {
        return invitation_id;
    }

    public void setInvitation_id(Long invitation_id) {
        this.invitation_id = invitation_id;
    }

    public Long getOwner_id() {
        return ownerId;
    }

    public void setOwner_id(Long owner_id) {
        this.ownerId = owner_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getRoom_id() {
        return room_id;
    }

    public void setRoom_id(Long room_id) {
        this.room_id = room_id;
    }
}
