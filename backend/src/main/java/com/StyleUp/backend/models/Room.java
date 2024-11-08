package com.StyleUp.backend.models;

import com.StyleUp.backend.repositories.DecorationRepository;
import jakarta.persistence.*;
import java.lang.*;
import java.util.*;

@Entity
@Table (name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long RoomId;

    @Column
    private String roomName;

    @Column
    private Long fkUserId;

    @OneToMany (cascade = CascadeType.ALL, orphanRemoval = true)//declares that one room can have many decorations, updates everything when one is saved
    /*The @JoinColumn annotation combined with a @OneToOne mapping indicates that a given column in the owner entity
    refers to a primary key in the reference entity*/
    @JoinColumn (name = "fk_room_id", referencedColumnName = "RoomId")
    private List<Decoration> decorations;

    public Room() {}

    public Room(String roomName, Long fkUserId, List<Decoration> decorations) {
        this.roomName = roomName;
        this.fkUserId = fkUserId;
        this.decorations = decorations;
    }

    public Long getRm_id() {
        return RoomId;
    }

    public void setRm_id(Long rm_id) {
        this.RoomId = rm_id;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public List<Decoration> getDecorations() {
        return decorations;
    }

    public void setDecorations(List<Decoration> decorations) {
        this.decorations = decorations;
    }
}
